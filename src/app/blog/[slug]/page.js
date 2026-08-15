'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getBlogBySlug } from '@/lib/api';
import Link from 'next/link';
import { Calendar, Eye, Tag, ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (params?.slug) {
      fetchPost();
    }
  }, [params?.slug]);

  const fetchPost = async () => {
    try {
      const response = await getBlogBySlug(params.slug);
      setPost(response.data);
    } catch (err) {
      setError('Blog post not found');
    } finally {
      setLoading(false);
    }
  };

  // Format date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b1220] px-6 md:px-16 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-white/10 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-white/10 rounded w-1/4 mb-8"></div>
            <div className="h-96 bg-white/10 rounded-xl mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-white/10 rounded w-full"></div>
              <div className="h-4 bg-white/10 rounded w-full"></div>
              <div className="h-4 bg-white/10 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-[#0b1220] px-6 md:px-16 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-6 py-4 rounded-2xl text-center">
            {error || 'Post not found'}
          </div>
          <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 mt-4 inline-block">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#0b1220] px-6 md:px-16 py-16">
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition mb-6"
        >
          <ArrowLeft size={18} />
          Back to Blog
        </Link>
        
        {/* Featured Image */}
        {post.featuredImage && (
          <div className="w-full h-[400px] rounded-2xl overflow-hidden mb-8 border border-white/10">
            <img 
              src={post.featuredImage} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={14} className="text-cyan-400" />
            {formatDate(post.publishedAt || post.createdAt)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Eye size={14} className="text-cyan-400" />
            {post.views || 0} views
          </span>
        </div>
        
        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="inline-flex items-center gap-1 bg-cyan-500/10 text-cyan-400 text-xs px-3 py-1 rounded-full border border-cyan-500/20"
              >
                <Tag size={12} />
                {tag}
              </span>
            ))}
          </div>
        )}
        
   {/* Content */}
<div className="bg-[#0D1F3A]/50 rounded-2xl p-8 md:p-12 border border-white/5">
  <div 
    className="prose prose-lg max-w-none text-white
      prose-headings:text-white
      prose-h1:text-white prose-h2:text-white prose-h3:text-white
      prose-p:text-white
      prose-a:text-cyan-400 hover:prose-a:text-cyan-300
      prose-strong:text-white
      prose-li:text-white
      prose-blockquote:text-white prose-blockquote:border-cyan-400
      prose-code:text-cyan-400 prose-code:bg-white/5 prose-code:px-1 prose-code:rounded
      prose-pre:bg-[#1a2438] prose-pre:border prose-pre:border-white/10"
    style={{ color: 'white !important' }}
    dangerouslySetInnerHTML={{ __html: post.content }}
  />
</div>
      </div>
    </article>
  );
}