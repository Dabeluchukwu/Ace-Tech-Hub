"use client";

import { useEffect, useState } from "react";
import { getBlogs } from "@/lib/api";
import Link from "next/link";
import { Calendar, Eye, Tag, ArrowRight } from "lucide-react";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await getBlogs();
      setPosts(response.data);
    } catch (err) {
      setError("Failed to load blog posts");
    } finally {
      setLoading(false);
    }
  };

  // Format date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b1220] px-6 md:px-16 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-[2px] bg-cyan-400 mx-auto mb-4"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Our <span className="text-cyan-400">Blog</span>
            </h1>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              Insights, stories, and innovations from the ACE TECH HUB team
            </p>
          </div>

          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-[#0D1F3A] rounded-2xl p-6 border border-white/5 animate-pulse"
              >
                <div className="h-7 bg-white/10 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-white/10 rounded w-full mb-2"></div>
                <div className="h-4 bg-white/10 rounded w-2/3 mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-5 bg-white/10 rounded w-16"></div>
                  <div className="h-5 bg-white/10 rounded w-16"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-[#0b1220] px-6 md:px-16 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Our <span className="text-cyan-400">Blog</span>
            </h1>
          </div>
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-6 py-4 rounded-2xl text-center">
            <p>{error}</p>
            <button
              onClick={fetchBlogs}
              className="mt-3 text-cyan-400 hover:text-cyan-300 transition"
            >
              Try again →
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1220] px-6 md:px-16 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-[2px] bg-cyan-400 mx-auto mb-4"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Our <span className="text-cyan-400">Blog</span>
          </h1>
          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Insights, stories, and innovations from the ACE TECH HUB team
          </p>
          {posts.length > 0 && (
            <p className="text-sm text-gray-500 mt-4">
              {posts.length} {posts.length === 1 ? "post" : "posts"} published
            </p>
          )}
        </div>

        {/* No Posts */}
        {posts.length === 0 ? (
          <div className="bg-[#0D1F3A] rounded-3xl p-12 text-center border border-white/5">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              No Posts Yet
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
              We're working on some amazing content. Check back soon!
            </p>
          </div>
        ) : (
          /* Blog Posts Grid */
          <div className="space-y-6">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post._id}>
                <div className="group bg-[#0D1F3A] rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      {/* Title */}
                      <h2 className="text-xl md:text-2xl font-semibold text-white group-hover:text-cyan-400 transition mb-2">
                        {post.title}
                      </h2>
                      {post.featuredImage && (
                        <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}

                      {/* Excerpt */}
                      {post.excerpt && (
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                      )}
                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
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

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar size={14} className="text-cyan-400" />
                          {formatDate(post.publishedAt || post.createdAt)}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Eye size={14} className="text-cyan-400" />
                          {post.views || 0} views
                        </span>
                      </div>
                    </div>

                    {/* Read More Arrow */}
                    <div className="flex items-center md:self-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 md:ml-4">
                      <span className="text-sm font-medium mr-2 hidden md:inline">
                        Read More
                      </span>
                      <ArrowRight
                        size={20}
                        className="transform group-hover:translate-x-1 transition"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
