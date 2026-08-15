'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import AdminLayout from '@/components/Admin/Layout';
import { getService, updateService } from '@/lib/api';
import ServiceForm from '@/components/Admin/ServiceForm';

export default function EditService() {
  const params = useParams();
  const router = useRouter();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchService();
  }, []);

  const fetchService = async () => {
    try {
      const response = await getService(params.id);
      setService(response.data);
    } catch (error) {
      alert('Failed to load service');
      router.push('/admin/services');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data) => {
    setSubmitting(true);
    try {
      await updateService(params.id, data);
      router.push('/admin/services');
    } catch (error) {
      alert('Failed to update service');
      setSubmitting(false);
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

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Edit Service</h1>
        <p className="text-gray-600">Update your service details</p>
      </div>
      <ServiceForm 
        initialData={service} 
        onSubmit={handleSubmit} 
        loading={submitting} 
      />
    </AdminLayout>
  );
}