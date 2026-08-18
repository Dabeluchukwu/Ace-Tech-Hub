'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import AdminLayout from '@/components/Admin/Layout';
import { getCertificate, updateCertificate } from '@/lib/api';
import CertificateForm from '@/components/Admin/CertificateForm';

export default function EditCertificate() {
  const params = useParams();
  const router = useRouter();
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchCertificate();
  }, []);

  const fetchCertificate = async () => {
    try {
      const response = await getCertificate(params.id);
      setCertificate(response.data);
    } catch (error) {
      console.error('Error fetching certificate:', error);
      alert('Failed to load certificate');
      router.push('/admin/certificates');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data) => {
    setSubmitting(true);
    try {
      await updateCertificate(params.id, data);
      router.push('/admin/certificates');
    } catch (error) {
      console.error('Error updating certificate:', error);
      alert(error.response?.data?.message || 'Failed to update certificate');
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

  if (!certificate) {
    return (
      <AdminLayout>
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          Certificate not found
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Edit Certificate</h1>
        <p className="text-gray-600">Update your certificate or award details</p>
      </div>
      <CertificateForm initialData={certificate} onSubmit={handleSubmit} loading={submitting} />
    </AdminLayout>
  );
}