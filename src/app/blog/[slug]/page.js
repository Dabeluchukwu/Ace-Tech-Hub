'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getBlogBySlug } from '@/lib/api';
import Link from 'next/link';
import { Calendar, Eye, Tag, ArrowLeft, ArrowRight, Mail, Share2, BookOpen } from 'lucide-react';
import { 
  FaTwitter, 
  FaLinkedinIn, 
  FaLink,
  FaCheckCircle,
  FaRocket,
  FaClock
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

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

  // Calculate read time
  const getReadTime = (content) => {
    if (!content) return '3 min read';
    const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
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
    <article className="min-h-screen bg-[#0b1220]">
      {/* Hero Section with Featured Image */}
      <div className="relative">
        {post.featuredImage ? (
          <div className="relative h-[50vh] min-h-[300px] max-h-[500px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-[#0b1220]/60 to-transparent z-10" />
            <img 
              src={post.featuredImage} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 px-6 md:px-16 pb-8">
              <div className="max-w-4xl mx-auto">
                <Link 
                  href="/blog" 
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition mb-4 text-sm"
                >
                  <ArrowLeft size={16} />
                  Back to Blog
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="px-6 md:px-16 pt-8 pb-4">
            <div className="max-w-4xl mx-auto">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition mb-6 text-sm"
              >
                <ArrowLeft size={16} />
                Back to Blog
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-6 md:px-16 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={14} className="text-cyan-400" />
                {formatDate(post.publishedAt || post.createdAt)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <BookOpen size={14} className="text-cyan-400" />
                {getReadTime(post.content)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Eye size={14} className="text-cyan-400" />
                {post.views || 0} views
              </span>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
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
          </div>

          {/* Blog Content */}
          <div className="bg-[#0D1F3A]/50 rounded-2xl p-6 md:p-10 lg:p-12 border border-white/5">
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

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl p-8 md:p-10 border border-cyan-400/20 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-400 text-sm px-4 py-1.5 rounded-full border border-cyan-500/30 mb-4">
                <HiOutlineMail size={16} />
                <span>Let's Connect</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to Build Your <span className="text-cyan-400">Scalable Future</span>?
              </h2>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                If you're ready to discuss your infrastructure needs, we'd love to chat. 
                Our team of experienced engineers can help you design and implement a 
                solution that grows with your business.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-black rounded-full font-medium hover:opacity-90 transition hover:scale-105 duration-300 shadow-lg shadow-cyan-500/25"
                >
                  Contact ACE TECH HUB Today
                  <ArrowRight size={18} />
                </Link>
                
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/5 transition hover:scale-105 duration-300"
                >
                  Explore Our Services
                </Link>
              </div>
              
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Available for consultations
                </span>
                <span className="text-gray-600">|</span>
                <span className="flex items-center gap-1.5">
                  <FaRocket size={12} className="text-cyan-400" />
                  50+ projects delivered
                </span>
                <span className="text-gray-600">|</span>
                <span className="flex items-center gap-1.5">
                  <FaClock size={12} className="text-cyan-400" />
                  Response within 24 hours
                </span>
              </div>
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/5">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Share2 size={16} />
              <span>Share this article:</span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs text-gray-400 hover:text-white transition"
              >
                <FaTwitter size={14} />
                Twitter
              </button>
              <button 
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs text-gray-400 hover:text-white transition"
              >
                <FaLinkedinIn size={14} />
                LinkedIn
              </button>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-lg text-xs text-gray-400 hover:text-white transition"
              >
                <FaLink size={14} />
                Copy Link
              </button>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-8 text-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition text-sm"
            >
              <ArrowLeft size={16} />
              Back to all articles
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}