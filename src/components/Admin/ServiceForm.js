'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Cloud, Upload, X, Loader2, ImageIcon } from 'lucide-react';
import { uploadImage } from '@/lib/api';

export default function ServiceForm({ initialData = {}, onSubmit, loading }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: initialData.title || '',
    description: initialData.description || '',
    category: initialData.category || 'Website',
    technologies: initialData.technologies?.join(', ') || '',
    liveUrl: initialData.liveUrl || '',
    featured: initialData.featured || false,
    imageUrl: initialData.imageUrl || '',
    imageKey: initialData.imageKey || '',
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

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setUploadError('Please select an image file');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setUploadError('Image must be less than 10MB');
      return;
    }

    setUploading(true);
    setUploadProgress(10);
    setUploadError('');

    try {
      // Convert to base64
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
          
          // Upload to Cloudflare R2 via backend
          const response = await uploadImage(base64String, file.name, 'services');
          
          setUploadProgress(100);
          
          // Update form with image URL
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
    const data = {
      title: formData.title,
      description: formData.description,
      category: formData.category,
      technologies: formData.technologies.split(',').map(t => t.trim()).filter(Boolean),
      liveUrl: formData.liveUrl,
      featured: formData.featured,
      imageUrl: formData.imageUrl,
      imageKey: formData.imageKey,
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Title *
          </label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., E-commerce Website"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description *
          </label>
          <textarea
            name="description"
            required
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Describe the service/project..."
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
              <span className="text-xs text-gray-500">Max 10MB • JPG, PNG, WEBP</span>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category *
            </label>
            <input
              type="text"
              name="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Website, Mobile App, E-commerce"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Live URL
            </label>
            <input
              type="url"
              name="liveUrl"
              value={formData.liveUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Technologies
          </label>
          <input
            type="text"
            name="technologies"
            value={formData.technologies}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="React, Node.js, MongoDB (comma separated)"
          />
          <p className="text-xs text-gray-500 mt-1">Separate technologies with commas</p>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-700">
            Featured Service (show on homepage)
          </label>
        </div>
      </div>

      <div className="flex gap-3 mt-8">
        <button
          type="submit"
          disabled={loading || uploading}
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Service'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}