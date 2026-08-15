'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import AdminLayout from '@/components/Admin/Layout';
import { getBlogById, updateBlog } from '@/lib/api';
import BlogForm from '@/components/Admin/BlogForm';

export default function EditBlog() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await getBlogById(params.id);
      setPost(response.data);
    } catch (error) {
      console.error('Error fetching blog post:', error);
      alert('Failed to load blog post');
      router.push('/admin/blog');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data) => {
    setSubmitting(true);
    try {
      await updateBlog(params.id, data);
      router.push('/admin/blog');
    } catch (error) {
      console.error('Error updating blog post:', error);
      alert(error.response?.data?.message || 'Failed to update blog post. Please try again.');
      setSubmitting(false);
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

  if (!post) {
    return (
      <AdminLayout>
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          Blog post not found
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Edit Blog Post</h1>
        <p className="text-gray-600">Update your article</p>
      </div>
      <BlogForm initialData={post} onSubmit={handleSubmit} loading={submitting} />
    </AdminLayout>
  );
}