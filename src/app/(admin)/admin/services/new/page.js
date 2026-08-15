'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/Admin/Layout';
import { createService } from '@/lib/api';
import ServiceForm from '@/components/Admin/ServiceForm';

export default function NewService() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      await createService(data);
      router.push('/admin/services');
    } catch (error) {
      alert('Failed to create service');
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Add New Service</h1>
        <p className="text-gray-600">Create a new service to showcase your work</p>
      </div>
      <ServiceForm onSubmit={handleSubmit} loading={loading} />
    </AdminLayout>
  );
}