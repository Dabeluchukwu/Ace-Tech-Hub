'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import TipTapEditor from './TipTapEditor';
import { Image as ImageIcon, X, Upload, Loader2, Cloud } from 'lucide-react';
import { uploadImage } from '@/lib/api';

export default function BlogForm({ initialData = {}, onSubmit, loading }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: initialData.title || '',
    content: initialData.content || '',
    excerpt: initialData.excerpt || '',
    featuredImage: initialData.featuredImage || '',
    featuredImagePublicId: initialData.featuredImagePublicId || '',
    tags: initialData.tags?.join(', ') || '',
    status: initialData.status || 'draft',
  });
  const [imagePreview, setImagePreview] = useState(initialData.featuredImage || '');
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('Image must be less than 5MB');
      return;
    }

    setUploading(true);
    setUploadProgress(0);
    setUploadError('');

    try {
      // Convert to base64 for upload
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
          
          // Upload to Cloudinary via backend
          const response = await uploadImage(base64String);
          
          setUploadProgress(100);
          
          // Update form with Cloudinary URL
          setFormData({
            ...formData,
            featuredImage: response.data.url,
            featuredImagePublicId: response.data.public_id,
          });
          setImagePreview(response.data.url);
          
          console.log('✅ Image uploaded to Cloudinary:', response.data.url);
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
      featuredImage: '',
      featuredImagePublicId: '',
    });
    setImagePreview('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleContentChange = (value) => {
    setFormData({
      ...formData,
      content: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.title.trim()) {
      alert('Please enter a title');
      return;
    }
    if (!formData.content.trim()) {
      alert('Please enter content');
      return;
    }

    // Prepare data for API
    const data = {
      title: formData.title.trim(),
      content: formData.content,
      excerpt: formData.excerpt?.trim() || '',
      featuredImage: formData.featuredImage || '',
      tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
      status: formData.status,
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
            placeholder="Enter post title"
          />
        </div>

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
                    Upload to Cloudinary
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
              {formData.featuredImage && (
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  <X size={18} />
                </button>
              )}
              <span className="text-xs text-gray-500">Max 5MB • JPG, PNG, WEBP</span>
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
                    Cloudinary
                  </span>
                  <span className="text-gray-400">Click remove to delete</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Excerpt
          </label>
          <textarea
            name="excerpt"
            rows={2}
            value={formData.excerpt}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
            placeholder="Brief summary of the post (max 300 characters)"
            maxLength={300}
          />
          <p className="text-xs text-gray-500 mt-1">
            {formData.excerpt.length}/300 characters
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content *
          </label>
          <TipTapEditor
            value={formData.content}
            onChange={handleContentChange}
            placeholder="Write your blog content here..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tags
          </label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
            placeholder="technology, web development, react (comma separated)"
          />
          <p className="text-xs text-gray-500 mt-1">Separate tags with commas</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
        </div>
      </div>

      <div className="flex gap-3 mt-8 pt-6 border-t border-gray-200">
        <button
          type="submit"
          disabled={loading || uploading}
          className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-black py-2 px-4 rounded-lg font-medium hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Saving...' : 'Save Post'}
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