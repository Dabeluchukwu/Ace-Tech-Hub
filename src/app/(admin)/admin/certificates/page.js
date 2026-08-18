'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/Admin/Layout';
import { getCertificates, deleteCertificate, toggleCertificateFeatured, bulkDeleteCertificates } from '@/lib/api';
import { Award, BookOpen, Star, Trash2, Eye, Edit, ImageIcon, Trash } from 'lucide-react';

export default function AdminCertificates() {
  const router = useRouter();
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const response = await getCertificates();
      setCertificates(response.data);
    } catch (err) {
      console.error('Error fetching certificates:', err);
      setError('Failed to load certificates');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this certificate?')) return;
    try {
      await deleteCertificate(id);
      setCertificates(certificates.filter(c => c._id !== id));
      setSelectedIds(selectedIds.filter(sid => sid !== id));
    } catch (err) {
      alert('Failed to delete certificate');
    }
  };

  const handleBulkDelete = async () => {
    if (selectedIds.length === 0) return;
    if (!confirm(`Delete ${selectedIds.length} selected certificates?`)) return;
    
    try {
      await bulkDeleteCertificates(selectedIds);
      await fetchCertificates();
      setSelectedIds([]);
      setSelectAll(false);
    } catch (err) {
      alert('Failed to delete certificates');
    }
  };

  const handleToggleFeatured = async (id) => {
    try {
      const response = await toggleCertificateFeatured(id);
      setCertificates(certificates.map(c => 
        c._id === id ? response.data : c
      ));
    } catch (err) {
      alert('Failed to toggle featured status');
    }
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setSelectAll(checked);
    if (checked) {
      const ids = filteredCertificates.map(c => c._id);
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

  const filteredCertificates = filter === 'all' 
    ? certificates 
    : certificates.filter(c => c.type.toLowerCase() === filter);

  const getTypeIcon = (type) => {
    return type === 'Certificate' ? <BookOpen size={14} /> : <Award size={14} />;
  };

  const getTypeColor = (type) => {
    return type === 'Certificate' 
      ? 'bg-blue-500/20 text-blue-400 border-blue-500/20'
      : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/20';
  };

  useEffect(() => {
    const filteredIds = filteredCertificates.map(c => c._id);
    const allSelected = filteredIds.length > 0 && filteredIds.every(id => selectedIds.includes(id));
    setSelectAll(allSelected);
  }, [filteredCertificates, selectedIds]);

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
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Certificates & Awards</h1>
            <p className="text-gray-600">Manage your certificates and awards</p>
          </div>
          <button
            onClick={() => router.push('/admin/certificates/new')}
            className="bg-cyan-500 text-black px-4 py-2 rounded-lg hover:bg-cyan-400 transition font-medium"
          >
            + Add New
          </button>
        </div>
      </div>

      {/* Bulk Actions Bar */}
      {selectedIds.length > 0 && (
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3 mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-cyan-700">
              {selectedIds.length} selected
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
              ? 'bg-cyan-500 text-black' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All ({certificates.length})
        </button>
        <button
          onClick={() => setFilter('certificate')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filter === 'certificate' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Certificates ({certificates.filter(c => c.type === 'Certificate').length})
        </button>
        <button
          onClick={() => setFilter('award')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
            filter === 'award' 
              ? 'bg-yellow-500 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Awards ({certificates.filter(c => c.type === 'Award').length})
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      {certificates.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-12 text-center border border-gray-100">
          <div className="text-6xl mb-4">📜</div>
          <p className="text-gray-500 text-lg">No certificates or awards added yet</p>
          <button
            onClick={() => router.push('/admin/certificates/new')}
            className="mt-4 bg-cyan-500 text-black px-4 py-2 rounded-lg hover:bg-cyan-400 transition"
          >
            Add Your First Credential
          </button>
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
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Issuer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Featured
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCertificates.map((cert) => (
                  <tr key={cert._id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(cert._id)}
                        onChange={() => handleSelectOne(cert._id)}
                        className="rounded border-gray-300"
                      />
                    </td>
                    <td className="px-6 py-4">
                      {cert.imageUrl ? (
                        <img
                          src={cert.imageUrl}
                          alt={cert.title}
                          className="w-12 h-12 object-cover rounded-lg"
                          onError={(e) => {
                            e.target.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                          <ImageIcon size={18} className="text-gray-400" />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{cert.title}</div>
                      {cert.description && (
                        <div className="text-xs text-gray-500 truncate max-w-xs">{cert.description}</div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium border ${getTypeColor(cert.type)}`}>
                        {getTypeIcon(cert.type)}
                        {cert.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">{cert.issuer}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-600">
                        {new Date(cert.date).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleToggleFeatured(cert._id)}
                        className={`px-2 py-1 rounded text-xs ${
                          cert.featured
                            ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {cert.featured ? '⭐ Featured' : 'Not Featured'}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-right text-sm font-medium">
                      <button
                        onClick={() => router.push(`/admin/certificates/edit/${cert._id}`)}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(cert._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 size={16} />
                      </button>
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