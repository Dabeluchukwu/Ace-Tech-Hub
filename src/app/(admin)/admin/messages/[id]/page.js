'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import AdminLayout from '@/components/Admin/Layout';
import { getMessage, replyMessage, deleteMessage } from '@/lib/api';
import { ArrowLeft, Reply, Trash2, Mail, User, Calendar, Send } from 'lucide-react';

export default function MessageDetail() {
  const params = useParams();
  const router = useRouter();
  const [message, setMessage] = useState(null);
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchMessage();
  }, []);

  const fetchMessage = async () => {
    try {
      const response = await getMessage(params.id);
      setMessage(response.data);
    } catch (error) {
      console.error('Error fetching message:', error);
      alert('Failed to load message');
      router.push('/admin/messages');
    } finally {
      setLoading(false);
    }
  };

  const handleReply = async () => {
    if (!reply.trim()) {
      alert('Please enter a reply');
      return;
    }
    setSending(true);
    try {
      const response = await replyMessage(params.id, reply);
      setMessage(response.data);
      setReply('');
      alert('Reply sent successfully!');
    } catch (error) {
      console.error('Error sending reply:', error);
      alert('Failed to send reply');
    } finally {
      setSending(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    try {
      await deleteMessage(params.id);
      router.push('/admin/messages');
    } catch (error) {
      console.error('Error deleting message:', error);
      alert('Failed to delete message');
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
        </div>
      </AdminLayout>
    );
  }

  if (!message) {
    return (
      <AdminLayout>
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          Message not found
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="mb-6">
        <button
          onClick={() => router.push('/admin/messages')}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition mb-4"
        >
          <ArrowLeft size={18} />
          Back to Messages
        </button>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Message Details</h1>
            <p className="text-gray-600">From {message.name}</p>
          </div>
          <button
            onClick={handleDelete}
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            <Trash2 size={18} />
            Delete
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden">
        {/* Header Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 border-b border-gray-100 bg-gray-50">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <User size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">From</p>
              <p className="font-semibold text-gray-900">{message.name}</p>
              <a href={`mailto:${message.email}`} className="text-sm text-blue-600 hover:underline">
                {message.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 bg-green-100 rounded-lg">
              <Calendar size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Received</p>
              <p className="font-semibold text-gray-900">
                {new Date(message.createdAt).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(message.createdAt).toLocaleTimeString()}
              </p>
            </div>
          </div>
        </div>

        {/* Subject */}
        <div className="p-6 border-b border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Subject</p>
          <p className="text-xl font-semibold text-gray-900">{message.subject}</p>
        </div>

        {/* Message */}
        <div className="p-6 border-b border-gray-100">
          <p className="text-sm text-gray-500 mb-3">Message</p>
          <div className="bg-gray-50 rounded-lg p-4 whitespace-pre-wrap text-gray-700">
            {message.message}
          </div>
          {message.phone && (
            <div className="mt-3 text-sm text-gray-500">
              <span className="font-medium">Phone:</span> {message.phone}
            </div>
          )}
        </div>

        {/* Reply Section */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Reply size={18} className="text-cyan-400" />
            <h3 className="font-semibold text-gray-900">
              {message.status === 'replied' ? 'Your Reply' : 'Reply to Sender'}
            </h3>
            {message.status === 'replied' && (
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                Sent
              </span>
            )}
          </div>

          {message.status === 'replied' && message.reply ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="whitespace-pre-wrap text-gray-700">{message.reply}</p>
              <p className="text-xs text-gray-400 mt-2">
                Sent on {new Date(message.repliedAt).toLocaleString()}
              </p>
            </div>
          ) : (
            <>
              <textarea
                rows={4}
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                placeholder="Type your reply here..."
              />
              <button
                onClick={handleReply}
                disabled={sending}
                className="mt-3 inline-flex items-center gap-2 px-6 py-2.5 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition disabled:opacity-50"
              >
                {sending ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Reply
                  </>
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}