'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/Admin/Layout';
import { createBlog } from '@/lib/api';
import BlogForm from '@/components/Admin/BlogForm';

export default function NewBlog() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleSubmit = async (data) => {
    setLoading(true);
    setError('');
    
    try {
      console.log('📝 Sending blog data:', data);
      const response = await createBlog(data);
      console.log('✅ Blog created:', response);
      router.push('/admin/blog');
    } catch (error) {
      console.error('❌ Error creating blog post:', error);
      // Show detailed error from backend
      const errorMessage = error.response?.data?.message || 'Failed to create blog post. Please try again.';
      setError(errorMessage);
      
      // If we have stack trace in development, show it
      if (error.response?.data?.stack) {
        console.error('Stack:', error.response.data.stack);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Create New Blog Post</h1>
        <p className="text-gray-600">Write and publish your next article</p>
      </div>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
          <p className="font-semibold">Error:</p>
          <p className="text-sm">{error}</p>
        </div>
      )}
      
      <BlogForm onSubmit={handleSubmit} loading={loading} />
    </AdminLayout>
  );
}