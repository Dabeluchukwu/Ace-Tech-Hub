'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Cloud, X, Loader2, ImageIcon } from 'lucide-react';
import { uploadImage } from '@/lib/api';

export default function CertificateForm({ initialData = {}, onSubmit, loading }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: initialData.title || '',
    type: initialData.type || 'Certificate',
    issuer: initialData.issuer || '',
    date: initialData.date ? new Date(initialData.date).toISOString().split('T')[0] : '',
    description: initialData.description || '',
    imageUrl: initialData.imageUrl || '',
    imageKey: initialData.imageKey || '',
    featured: initialData.featured || false,
  });
  const [imagePreview, setImagePreview] = useState(initialData.imageUrl || '');
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setUploadError('Please select an image file');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setUploadError('Image must be less than 10MB');
      return;
    }

    setUploading(true);
    setUploadProgress(10);
    setUploadError('');

    try {
      const reader = new FileReader();
      reader.onprogress = (event) => {
        if (event.lengthComputable) {
          const progress = (event.loaded / event.total) * 50;
          setUploadProgress(progress);
        }
      };
      
      reader.onloadend = async () => {
        try {
          setUploadProgress(70);
          const base64String = reader.result;
          
          const response = await uploadImage(base64String, file.name, 'certificates');
          
          setUploadProgress(100);
          setFormData({
            ...formData,
            imageUrl: response.data.url,
            imageKey: response.data.key,
          });
          setImagePreview(response.data.url);
          
          console.log('✅ Image uploaded to R2:', response.data.url);
        } catch (error) {
          console.error('Upload error:', error);
          setUploadError(error.response?.data?.message || 'Failed to upload image');
        } finally {
          setUploading(false);
          setUploadProgress(0);
        }
      };
      
      reader.onerror = () => {
        setUploadError('Failed to read image file');
        setUploading(false);
      };
      
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Image upload error:', error);
      setUploadError('Failed to upload image');
      setUploading(false);
    }
  };

  const handleRemoveImage = () => {
    setFormData({
      ...formData,
      imageUrl: '',
      imageKey: '',
    });
    setImagePreview('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      alert('Please enter a title');
      return;
    }
    if (!formData.issuer.trim()) {
      alert('Please enter the issuer');
      return;
    }
    if (!formData.date) {
      alert('Please select a date');
      return;
    }

    const data = {
      title: formData.title.trim(),
      type: formData.type,
      issuer: formData.issuer.trim(),
      date: formData.date,
      description: formData.description?.trim() || '',
      imageUrl: formData.imageUrl || '',
      imageKey: formData.imageKey || '',
      featured: formData.featured,
    };
    
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title *
          </label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
            placeholder="e.g., Bachelor of Science in Computer Science"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type *
            </label>
            <select
              name="type"
              required
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
            >
              <option value="Certificate">Certificate</option>
              <option value="Award">Award</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date *
            </label>
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Issuer *
          </label>
          <input
            type="text"
            name="issuer"
            required
            value={formData.issuer}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
            placeholder="e.g., University of Technology"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            name="description"
            rows={3}
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
            placeholder="Additional details about this certificate or award..."
          />
        </div>

        {/* Image Upload Section */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Featured Image
          </label>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-black rounded-lg font-medium hover:opacity-90 transition disabled:opacity-50"
              >
                {uploading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Uploading... {Math.round(uploadProgress)}%
                  </>
                ) : (
                  <>
                    <Cloud size={18} />
                    Upload Image
                  </>
                )}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              {formData.imageUrl && (
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  <X size={18} />
                </button>
              )}
              <span className="text-xs text-gray-500">Optional • Max 10MB</span>
            </div>
            
            {uploading && (
              <div className="w-full max-w-sm bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
            )}
            
            {uploadError && (
              <p className="text-sm text-red-500">{uploadError}</p>
            )}
            
            {/* Image Preview */}
            {imagePreview && (
              <div className="relative w-full max-w-sm rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={imagePreview}
                  alt="Featured image preview"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs px-3 py-1 flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    <Cloud size={12} />
                    Cloudflare R2
                  </span>
                  <span className="text-gray-400">Click remove to delete</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
            className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-700">
            Featured (show on homepage)
          </label>
        </div>
      </div>

      <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
        <button
          type="submit"
          disabled={loading || uploading}
          className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-black py-2 px-4 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Saving...' : 'Save Certificate'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-300 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}