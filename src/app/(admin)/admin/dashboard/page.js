"use client";
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/Admin/Layout';  // ✅ Add this import
import apiClient from '../../../../lib/apiClient';

export default function Dashboard() {
  const router = useRouter();
  const [stats, setStats] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchDashboardData();
    
    // Auto-refresh every 30 seconds
    const interval = setInterval(() => {
      fetchDashboardData(true);
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const fetchDashboardData = async (silent = false) => {
    if (!silent) {
      setLoading(true);
    } else {
      setRefreshing(true);
    }
    setError(null);
    
    try {
      const [statsRes, notifRes] = await Promise.all([
        apiClient.get('/api/dashboard/stats'),
        apiClient.get('/api/notifications?limit=10'),
      ]);

      setStats(statsRes.data.data);
      setNotifications(notifRes.data.data.notifications || []);
      setUnreadCount(notifRes.data.data.unreadCount || 0);
      setLastUpdated(new Date());
    } catch (error) {
      console.error('Error fetching dashboard:', error);
      setError('Failed to load dashboard data. Please try again.');
      
      if (error.response?.status === 401) {
        localStorage.removeItem('adminToken');
        router.push('/admin/login');
      }
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const markAllRead = async () => {
    try {
      await apiClient.put('/api/notifications/mark-all-read');
      setUnreadCount(0);
      setNotifications(notifications.map(n => ({ ...n, isRead: true })));
    } catch (error) {
      console.error('Error marking all read:', error);
    }
  };

  const markAsRead = async (id) => {
    try {
      await apiClient.put(`/api/notifications/${id}/read`);
      setNotifications(notifications.map(n => 
        n._id === id ? { ...n, isRead: true } : n
      ));
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    if (seconds < 60) return 'Just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  if (loading) {
    return (
      <AdminLayout>
        <DashboardSkeleton />
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="flex flex-col items-center justify-center h-64 p-6">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Something went wrong</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => fetchDashboardData()}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Try Again
          </button>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="p-4 md:p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 md:mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Dashboard</h1>
            {lastUpdated && (
              <p className="text-xs text-gray-400 mt-1">
                Last updated: {lastUpdated.toLocaleTimeString()}
                <button
                  onClick={() => fetchDashboardData(true)}
                  className="ml-2 text-blue-500 hover:text-blue-700"
                >
                  {refreshing ? '🔄 Refreshing...' : '🔄 Refresh'}
                </button>
              </p>
            )}
          </div>
          {/* <div className="flex items-center space-x-3 w-full md:w-auto"> */}
            {/* Notification Bell */}
            {/* <div className="relative">
              <button
                onClick={() => router.push('/admin/notifications')}
                className="relative p-2 bg-white rounded-full shadow hover:shadow-md transition"
              >
                <span className="text-xl md:text-2xl">🔔</span>
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </button>
            </div> */}
          {/* </div> */}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
          <StatCard
            title="Services"
            value={stats?.overview?.totalServices || 0}
            icon="🛠️"
            color="bg-blue-500"
            trend="+12%"
          />
          <StatCard
            title="Messages"
            value={stats?.overview?.totalMessages || 0}
            icon="✉️"
            color="bg-green-500"
            badge={stats?.overview?.unreadMessages || 0}
            badgeLabel="unread"
          />
          <StatCard
            title="Blog Posts"
            value={stats?.overview?.totalBlogs || 0}
            icon="📝"
            color="bg-purple-500"
            badge={`${stats?.overview?.publishedBlogs || 0} published`}
          />
          <StatCard
            title="Notifications"
            value={unreadCount}
            icon="🔔"
            color="bg-orange-500"
            badge={unreadCount > 0 ? `${unreadCount} unread` : 'All read'}
            badgeColor={unreadCount > 0 ? 'text-orange-500' : 'text-green-500'}
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
          <QuickAction
            icon="➕"
            label="New Service"
            onClick={() => router.push('/admin/services/new')}
            color="bg-blue-100 text-blue-600 hover:bg-blue-200"
          />
          <QuickAction
            icon="📝"
            label="New Post"
            onClick={() => router.push('/admin/blog/new')}
            color="bg-purple-100 text-purple-600 hover:bg-purple-200"
          />
          <QuickAction
            icon="✉️"
            label="View Messages"
            onClick={() => router.push('/admin/messages')}
            color="bg-green-100 text-green-600 hover:bg-green-200"
          />
          <QuickAction
            icon="📊"
            label="View Analytics"
            onClick={() => router.push('/admin/analytics')}
            color="bg-orange-100 text-orange-600 hover:bg-orange-200"
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Messages */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-4 md:p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg md:text-xl font-semibold">📨 Recent Messages</h2>
              <button
                onClick={() => router.push('/admin/messages')}
                className="text-sm text-blue-500 hover:text-blue-700"
              >
                View all →
              </button>
            </div>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {stats?.recent?.messages?.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-400 text-4xl mb-2">📭</p>
                  <p className="text-gray-500">No messages yet</p>
                </div>
              ) : (
                stats?.recent?.messages?.slice(0, 5).map((msg) => (
                  <div
                    key={msg._id}
                    className={`p-3 md:p-4 rounded-lg border cursor-pointer hover:shadow transition ${
                      msg.status === 'unread' 
                        ? 'border-blue-300 bg-blue-50' 
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                    onClick={() => router.push(`/admin/messages/${msg._id}`)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-sm md:text-base truncate">{msg.name}</p>
                          {msg.status === 'unread' && (
                            <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 truncate">{msg.subject}</p>
                        <p className="text-sm text-gray-500 truncate">{msg.message}</p>
                        <p className="text-xs text-gray-400 mt-1">{timeAgo(msg.createdAt)}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded flex-shrink-0 ml-2 ${
                        msg.status === 'unread' ? 'bg-blue-500 text-white' :
                        msg.status === 'replied' ? 'bg-green-500 text-white' :
                        'bg-gray-200 text-gray-600'
                      }`}>
                        {msg.status}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Notifications Panel */}
          <div className="bg-white rounded-lg shadow p-4 md:p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg md:text-xl font-semibold">🔔 Notifications</h2>
              {unreadCount > 0 && (
                <button
                  onClick={markAllRead}
                  className="text-xs md:text-sm text-blue-500 hover:text-blue-700"
                >
                  Mark all read
                </button>
              )}
            </div>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-400 text-4xl mb-2">🎉</p>
                  <p className="text-gray-500 text-sm">All caught up!</p>
                </div>
              ) : (
                notifications.slice(0, 10).map((notif) => (
                  <div
                    key={notif._id}
                    className={`p-3 rounded-lg border transition ${
                      !notif.isRead ? 'border-blue-300 bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-lg flex-shrink-0">
                        {notif.type === 'message' ? '📩' :
                         notif.type === 'reply' ? '✉️' :
                         notif.type === 'blog' ? '📝' : 
                         notif.type === 'system' && notif.title.includes('deleted') ? '🗑️' :
                         '🔔'}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <p className={`font-medium text-sm ${!notif.isRead ? 'text-blue-700' : ''} truncate`}>
                            {notif.title}
                          </p>
                          {!notif.isRead && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                markAsRead(notif._id);
                              }}
                              className="text-xs text-blue-500 hover:text-blue-700 flex-shrink-0"
                            >
                              Mark read
                            </button>
                          )}
                        </div>
                        <p className="text-xs text-gray-600 truncate">{notif.message}</p>
                        <p className="text-xs text-gray-400 mt-1">{timeAgo(notif.createdAt)}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

// Stat Card Component
const StatCard = ({ title, value, icon, color, badge, badgeLabel, trend, badgeColor }) => (
  <div className="bg-white rounded-lg shadow p-4 md:p-6 hover:shadow-lg transition">
    <div className="flex items-center justify-between">
      <div className="flex-1 min-w-0">
        <p className="text-gray-500 text-xs md:text-sm truncate">{title}</p>
        <p className="text-2xl md:text-3xl font-bold text-gray-800">{value}</p>
        {badge !== undefined && badge !== null && (
          <p className={`text-xs mt-1 ${badgeColor || 'text-gray-500'}`}>
            {badge} {badgeLabel}
          </p>
        )}
        {trend && (
          <p className="text-xs text-green-500 mt-1">{trend} this month</p>
        )}
      </div>
      <div className={`w-10 h-10 md:w-12 md:h-12 ${color} rounded-lg flex items-center justify-center text-white text-xl md:text-2xl flex-shrink-0 ml-2`}>
        {icon}
      </div>
    </div>
  </div>
);

// Quick Action Component
const QuickAction = ({ icon, label, onClick, color }) => (
  <button
    onClick={onClick}
    className={`${color} p-4 rounded-lg text-center transition transform hover:scale-105`}
  >
    <div className="text-2xl md:text-3xl mb-1">{icon}</div>
    <p className="text-xs md:text-sm font-medium">{label}</p>
  </button>
);

// Loading Skeleton
const DashboardSkeleton = () => (
  <div className="p-4 md:p-6">
    {/* Header Skeleton */}
    <div className="flex justify-between items-center mb-8">
      <div className="h-8 w-48 bg-gray-200 rounded animate-pulse"></div>
      <div className="flex items-center space-x-4">
        <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
      </div>
    </div>

    {/* Stats Cards Skeleton */}
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 w-12 bg-gray-200 rounded mt-2 animate-pulse"></div>
            </div>
            <div className="h-12 w-12 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>

    {/* Two Column Skeleton */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
        <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mb-4"></div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-4 border rounded-lg mb-3">
            <div className="flex justify-between">
              <div className="flex-1">
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-3 w-48 bg-gray-200 rounded mt-2 animate-pulse"></div>
                <div className="h-3 w-64 bg-gray-200 rounded mt-2 animate-pulse"></div>
              </div>
              <div className="h-6 w-16 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mb-4"></div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-3 border rounded-lg mb-2">
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-3 w-40 bg-gray-200 rounded mt-2 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);