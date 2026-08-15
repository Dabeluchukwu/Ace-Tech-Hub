'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import AdminLayout from '@/components/Admin/Layout';
import { getMessage, replyMessage, deleteMessage } from '@/lib/api';

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
      alert('Failed to delete message');
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  if (!message) {
    return (
      <AdminLayout>
        <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded">
          Message not found
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Message Details</h1>
          <p className="text-gray-600">From {message.name}</p>
        </div>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Delete Message
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-semibold">{message.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <a href={`mailto:${message.email}`} className="text-blue-600 hover:underline">
                {message.email}
              </a>
            </div>
            {message.phone && (
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p>{message.phone}</p>
              </div>
            )}
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <span className={`px-2 py-1 rounded text-xs ${
                message.status === 'unread' ? 'bg-blue-500 text-white' :
                message.status === 'replied' ? 'bg-green-500 text-white' :
                'bg-gray-300 text-gray-700'
              }`}>
                {message.status}
              </span>
            </div>
          </div>
        </div>

        <div className="p-6 border-b">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Subject</h3>
          <p className="text-lg font-semibold">{message.subject}</p>
        </div>

        <div className="p-6 border-b">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Message</h3>
          <p className="whitespace-pre-wrap">{message.message}</p>
        </div>

        {message.reply && (
          <div className="p-6 border-b bg-green-50">
            <h3 className="text-sm font-medium text-green-600 mb-2">Your Reply</h3>
            <p className="whitespace-pre-wrap">{message.reply}</p>
            <p className="text-xs text-gray-500 mt-2">
              Sent on {new Date(message.repliedAt).toLocaleString()}
            </p>
          </div>
        )}

        {message.status !== 'replied' && (
          <div className="p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Reply to {message.name}</h3>
            <textarea
              rows={4}
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Type your reply here..."
            />
            <button
              onClick={handleReply}
              disabled={sending}
              className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              {sending ? 'Sending...' : 'Send Reply'}
            </button>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}