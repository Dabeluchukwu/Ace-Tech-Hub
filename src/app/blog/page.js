"use client";

import { useEffect, useState, useMemo } from "react";
import { getBlogs } from "@/lib/api";
import Link from "next/link";
import { Calendar, Eye, Tag, ArrowRight, Clock, Search, X } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const staggerCards = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

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

  // Get all unique tags
  const allTags = ["All", ...new Set(posts.flatMap((post) => post.tags || []))];

  // Filter posts by tag and search query
  const filteredPosts = useMemo(() => {
    let result = posts;
    
    if (selectedCategory !== "All") {
      result = result.filter((post) => post.tags?.includes(selectedCategory));
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt?.toLowerCase().includes(query) ||
          post.content?.toLowerCase().includes(query) ||
          post.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }
    
    return result;
  }, [posts, selectedCategory, searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
  };

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b1220] px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-[2px] bg-cyan-400 mx-auto mb-4"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Our <span className="text-cyan-400">Blog</span>
            </h1>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              Insights, stories, and innovations from the ACE TECH HUB team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-[#0D1F3A] rounded-2xl overflow-hidden border border-white/5 animate-pulse"
              >
                <div className="h-48 bg-white/10"></div>
                <div className="p-6">
                  <div className="h-6 bg-white/10 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-white/10 rounded w-full mb-2"></div>
                  <div className="h-4 bg-white/10 rounded w-2/3"></div>
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Our <span className="text-cyan-400">Blog</span>
            </h1>
          </div>
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-6 py-4 rounded-2xl text-center max-w-2xl mx-auto">
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
    <motion.div 
      className="min-h-screen bg-[#0b1220]"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Hero Header */}
      <motion.section 
        className="relative px-6 py-20 md:py-28 bg-gradient-to-b from-[#0b1220] to-[#0D1F3A]/30"
        variants={fadeUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="w-16 h-[2px] bg-cyan-400 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.6 }}
          />
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            variants={fadeUp}
          >
            Our <span className="text-cyan-400">Blog</span>
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            variants={fadeUp}
          >
            Insights, stories, and innovations from the ACE TECH HUB team
          </motion.p>
          {posts.length > 0 && (
            <motion.p 
              className="text-sm text-gray-500 mt-4"
              variants={fadeUp}
            >
              {posts.length} {posts.length === 1 ? "article" : "articles"} published
            </motion.p>
          )}
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        {/* Search and Filter Bar */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-center gap-4 mb-10"
          variants={staggerContainer}
        >
          {/* Search Bar */}
          <motion.div className="flex-1 relative" variants={fadeUp}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-12 py-3 bg-[#0D1F3A] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 transition"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            {searchQuery && (
              <motion.p 
                className="text-xs text-gray-500 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Found {filteredPosts.length} result{filteredPosts.length !== 1 ? "s" : ""} for "{searchQuery}"
              </motion.p>
            )}
          </motion.div>

          {/* Category Filter - Scrollable */}
          <motion.div 
            className="flex flex-wrap gap-2 flex-shrink-0"
            variants={staggerContainer}
          >
            {allTags.map((tag, index) => (
              <motion.button
                key={tag}
                onClick={() => setSelectedCategory(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition whitespace-nowrap ${
                  selectedCategory === tag
                    ? "bg-cyan-500 text-black"
                    : "bg-[#0D1F3A] text-gray-400 hover:text-white border border-white/5 hover:border-cyan-500/30"
                }`}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* No Results */}
        {filteredPosts.length === 0 ? (
          <motion.div 
            className="bg-[#0D1F3A] rounded-3xl p-16 text-center border border-white/5"
            variants={fadeUp}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              No articles found
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
              {searchQuery
                ? `No results matching "${searchQuery}". Try adjusting your search or filters.`
                : "We're working on some amazing content. Check back soon!"}
            </p>
            {searchQuery && (
              <motion.button
                onClick={clearSearch}
                className="mt-4 text-cyan-400 hover:text-cyan-300 transition"
                whileHover={{ x: 5 }}
              >
                Clear search →
              </motion.button>
            )}
          </motion.div>
        ) : (
          /* Blog Posts Grid */
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerCards}
          >
            {filteredPosts.map((post) => (
              <motion.div
                key={post._id}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="group bg-[#0D1F3A] rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 h-full flex flex-col">
                    {/* Featured Image */}
                    {post.featuredImage ? (
                      <motion.div 
                        className="relative h-48 overflow-hidden bg-[#0b1220]"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F3A] to-transparent opacity-60" />
                      </motion.div>
                    ) : (
                      <div className="h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center">
                        <span className="text-4xl opacity-20">📄</span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {post.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="bg-cyan-500/10 text-cyan-400 text-xs px-2.5 py-0.5 rounded-full border border-cyan-500/20"
                            >
                              {tag}
                            </span>
                          ))}
                          {post.tags.length > 2 && (
                            <span className="text-xs text-gray-500">
                              +{post.tags.length - 2}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Title */}
                      <h2 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition mb-2 line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      {post.excerpt && (
                        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                          {post.excerpt}
                        </p>
                      )}

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-white/5 mt-auto">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar size={14} className="text-cyan-400" />
                          {formatDate(post.publishedAt || post.createdAt)}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Eye size={14} className="text-cyan-400" />
                          {post.views || 0}
                        </span>
                      </div>

                      {/* Read More */}
                      <div className="mt-4 flex items-center justify-between">
                        <motion.span 
                          className="text-sm font-medium text-cyan-400 group-hover:gap-2 transition-all inline-flex items-center gap-1"
                          whileHover={{ x: 5 }}
                        >
                          Read Article
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                        </motion.span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Clock size={12} />
                          {Math.ceil((post.content?.length || 0) / 1000)} min
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
    </motion.div>
  );
}