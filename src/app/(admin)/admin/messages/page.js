'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/Admin/Layout';
import { getMessages, deleteMessage, updateMessageStatus, bulkDeleteMessages } from '@/lib/api';
import { Mail, CheckCircle, Reply, Archive, Trash2, Eye, Trash } from 'lucide-react';

export default function AdminMessages() {
  const router = useRouter();
  const [messages, setMessages] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await getMessages();
      setMessages(response.data);
      setStats(response.stats);
    } catch (err) {
      console.error('Error fetching messages:', err);
      setError('Failed to load messages');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this message?')) return;
    try {
      await deleteMessage(id);
      setMessages(messages.filter(m => m._id !== id));
      if (stats) {
        const updatedStats = { ...stats };
        updatedStats.total -= 1;
        if (messages.find(m => m._id === id)?.status === 'unread') {
          updatedStats.unread -= 1;
        }
        setStats(updatedStats);
      }
      setSelectedIds(selectedIds.filter(sid => sid !== id));
    } catch (err) {
      alert('Failed to delete message');
    }
  };

  // ✅ Make sure this function is correct
  const handleBulkDelete = async () => {
    if (selectedIds.length === 0) {
      alert('Please select at least one message');
      return;
    }
    
    console.log('📝 Selected IDs before delete:', selectedIds);
    console.log('📝 Is array:', Array.isArray(selectedIds));
    console.log('📝 Type of first ID:', typeof selectedIds[0]);
    
    if (!confirm(`Delete ${selectedIds.length} selected messages? This action cannot be undone.`)) return;
    
    try {
      console.log('📝 Calling bulkDeleteMessages with:', selectedIds);
      const result = await bulkDeleteMessages(selectedIds);
      console.log('✅ Bulk delete result:', result);
      
      // Refresh messages
      await fetchMessages();
      setSelectedIds([]);
      setSelectAll(false);
    } catch (err) {
      console.error('❌ Bulk delete error:', err);
      console.error('❌ Error response:', err.response);
      alert(err.response?.data?.message || 'Failed to delete messages');
    }
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      await updateMessageStatus(id, status);
      setMessages(messages.map(m => 
        m._id === id ? { ...m, status } : m
      ));
      fetchMessages();
    } catch (err) {
      alert('Failed to update message status');
    }
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);
    if (checked) {
      const ids = filteredMessages.map(m => m._id);
      setSelectedIds(ids);
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id) => {
    setSelectedIds(prev => {
      if (prev.includes(id)) {
        return prev.filter(sid => sid !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'unread': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'read': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      case 'replied': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'archived': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'unread': return <Mail size={14} className="text-blue-400" />;
      case 'read': return <Eye size={14} className="text-gray-400" />;
      case 'replied': return <Reply size={14} className="text-green-400" />;
      case 'archived': return <Archive size={14} className="text-gray-400" />;
      default: return <Mail size={14} className="text-gray-400" />;
    }
  };

  const filteredMessages = filter === 'all' 
    ? messages 
    : messages.filter(m => m.status === filter);

  useEffect(() => {
    const filteredIds = filteredMessages.map(m => m._id);
    const allSelected = filteredIds.length > 0 && filteredIds.every(id => selectedIds.includes(id));
    setSelectAll(allSelected);
  }, [filteredMessages, selectedIds]);

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
        <p className="text-gray-600">Manage all incoming messages</p>
      </div>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
            <p className="text-sm text-gray-500">Total</p>
            <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 border border-blue-100">
            <p className="text-sm text-gray-500">Unread</p>
            <p className="text-2xl font-bold text-blue-600">{stats.unread}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 border border-green-100">
            <p className="text-sm text-gray-500">Replied</p>
            <p className="text-2xl font-bold text-green-600">{stats.replied}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
            <p className="text-sm text-gray-500">Archived</p>
            <p className="text-2xl font-bold text-gray-600">{stats.archived}</p>
          </div>
        </div>
      )}

      {/* Bulk Actions Bar */}
      {selectedIds.length > 0 && (
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3 mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-cyan-700">
              {selectedIds.length} message{selectedIds.length !== 1 ? 's' : ''} selected
            </span>
            <span className="text-xs text-cyan-500">|</span>
            <button
              onClick={() => setSelectedIds([])}
              className="text-sm text-cyan-600 hover:text-cyan-800 transition"
            >
              Clear selection
            </button>
          </div>
          <button
            onClick={handleBulkDelete}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition text-sm"
          >
            <Trash size={16} />
            Delete Selected
          </button>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filter === 'all' 
              ? 'bg-cyan-500 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All ({stats?.total || 0})
        </button>
        <button
          onClick={() => setFilter('unread')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filter === 'unread' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Unread ({stats?.unread || 0})
        </button>
        <button
          onClick={() => setFilter('replied')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filter === 'replied' 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Replied ({stats?.replied || 0})
        </button>
        <button
          onClick={() => setFilter('archived')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filter === 'archived' 
              ? 'bg-gray-500 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Archived ({stats?.archived || 0})
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      {filteredMessages.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-12 text-center border border-gray-100">
          <Mail size={48} className="text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No messages found</p>
          <p className="text-gray-400 text-sm">Messages from your contact form will appear here</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      className="rounded border-gray-300"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    From
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMessages.map((message) => (
                  <tr 
                    key={message._id} 
                    className={`hover:bg-gray-50 transition cursor-pointer ${
                      message.status === 'unread' ? 'bg-blue-50/50' : ''
                    }`}
                    onClick={() => router.push(`/admin/messages/${message._id}`)}
                  >
                    <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(message._id)}
                        onChange={() => handleSelectOne(message._id)}
                        className="rounded border-gray-300"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{message.name}</div>
                      <div className="text-sm text-gray-500">{message.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{message.subject}</div>
                      <div className="text-sm text-gray-500 truncate max-w-xs">{message.message}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(message.status)}`}>
                        {getStatusIcon(message.status)}
                        {message.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600">
                        {new Date(message.createdAt).toLocaleDateString()}
                      </div>
                      <div className="text-xs text-gray-400">
                        {new Date(message.createdAt).toLocaleTimeString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => router.push(`/admin/messages/${message._id}`)}
                          className="text-blue-600 hover:text-blue-800 p-1 rounded hover:bg-blue-50"
                          title="View"
                        >
                          <Eye size={16} />
                        </button>
                        {message.status !== 'replied' && (
                          <button
                            onClick={() => handleStatusUpdate(message._id, 'replied')}
                            className="text-green-600 hover:text-green-800 p-1 rounded hover:bg-green-50"
                            title="Mark as Replied"
                          >
                            <Reply size={16} />
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(message._id)}
                          className="text-red-600 hover:text-red-800 p-1 rounded hover:bg-red-50"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}