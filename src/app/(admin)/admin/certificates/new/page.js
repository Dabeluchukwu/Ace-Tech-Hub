'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/Admin/Layout';
import { createCertificate } from '@/lib/api';
import CertificateForm from '@/components/Admin/CertificateForm';

export default function NewCertificate() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      await createCertificate(data);
      router.push('/admin/certificates');
    } catch (error) {
      console.error('Error creating certificate:', error);
      alert(error.response?.data?.message || 'Failed to create certificate');
      setLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Add New Certificate</h1>
        <p className="text-gray-600">Add a new certificate or award to showcase</p>
      </div>
      <CertificateForm onSubmit={handleSubmit} loading={loading} />
    </AdminLayout>
  );
}