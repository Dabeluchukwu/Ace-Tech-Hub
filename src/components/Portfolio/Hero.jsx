"use client";

import { useState, useEffect, useMemo } from "react";
import { ArrowRight, Loader2, Search, X, Grid3x3, LayoutGrid, Filter, ImageIcon } from "lucide-react";
import { getServices } from "@/lib/api";
import { motion } from "framer-motion";

// Fallback filters if no services exist
const defaultFilters = [
  "All Projects",
  "Web Development",
  "Software Consultancy",
  "Cloud Solutions",
  "Enterprise Software",
];

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
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

export default function PortfolioHero() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const [searchQuery, setSearchQuery] = useState("");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState(defaultFilters);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await getServices();
      const data = response.data || [];
      setServices(data);
      
      if (data.length > 0) {
        const categories = data
          .map(item => item.category)
          .filter(Boolean)
          .filter((value, index, self) => self.indexOf(value) === index);
        
        setFilters(["All Projects", ...categories]);
      }
    } catch (err) {
      console.error("Error fetching services:", err);
      setError("Failed to load services. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Map service to project card format
  const mapServiceToProject = (service) => ({
    id: service._id,
    tag: service.category || "Project",
    category: service.category || "Uncategorized",
    title: service.title || "Untitled Project",
    desc: service.description || "No description available.",
    imageUrl: service.imageUrl || null,
    gradient: service.featured 
      ? "from-cyan-500/20 via-blue-500/10 to-transparent" 
      : "from-slate-700/30 via-slate-800/20 to-transparent",
    button: !!service.liveUrl,
    liveUrl: service.liveUrl,
    technologies: service.technologies || [],
    featured: service.featured || false,
  });

  const projects = services.map(mapServiceToProject);

  // Filter projects by category and search
  const filteredProjects = useMemo(() => {
    let result = projects;
    
    if (activeFilter !== "All Projects") {
      result = result.filter((p) => p.category === activeFilter);
    }
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.desc.toLowerCase().includes(query) ||
          p.tag.toLowerCase().includes(query) ||
          p.technologies.some((tech) => tech.toLowerCase().includes(query))
      );
    }
    
    return result;
  }, [projects, activeFilter, searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
  };

  // Loading State
  if (loading) {
    return (
      <main className="min-h-screen bg-[#020617] px-6 md:px-16 py-16 text-white">
        <motion.section 
          className="max-w-6xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-[2px] bg-cyan-400 mb-6"></div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Our <span className="text-cyan-400">Portfolio</span>
          </h1>
          <p className="mt-4 text-slate-400 max-w-xl text-lg">
            Exploring the intersection of technical precision and creative momentum.
          </p>
        </motion.section>
        
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden border border-white/5 bg-gradient-to-br from-slate-800/30 to-slate-900/30 p-6 md:p-8 min-h-[260px] animate-pulse"
            >
              <div className="space-y-4">
                <div className="h-6 w-24 bg-white/5 rounded-full"></div>
                <div className="h-8 w-48 bg-white/5 rounded"></div>
                <div className="h-4 w-full bg-white/5 rounded"></div>
                <div className="h-4 w-3/4 bg-white/5 rounded"></div>
                <div className="h-10 w-36 bg-white/5 rounded-full"></div>
              </div>
            </div>
          ))}
        </section>
      </main>
    );
  }

  // Error State
  if (error) {
    return (
      <main className="min-h-screen bg-[#020617] px-6 md:px-16 py-16 text-white">
        <motion.section 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-[2px] bg-cyan-400 mb-6"></div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Our <span className="text-cyan-400">Portfolio</span>
          </h1>
          <div className="mt-8 bg-red-500/10 border border-red-500/20 rounded-2xl p-8 text-center max-w-2xl">
            <div className="text-5xl mb-4">⚠️</div>
            <h2 className="text-xl font-semibold text-red-400 mb-2">
              Unable to Load Projects
            </h2>
            <p className="text-slate-400">{error}</p>
            <button
              onClick={fetchServices}
              className="mt-4 px-6 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition border border-cyan-500/30"
            >
              Try Again
            </button>
          </div>
        </motion.section>
      </main>
    );
  }

  // No Services State
  if (services.length === 0) {
    return (
      <main className="min-h-screen bg-[#020617] px-6 md:px-16 py-16 text-white">
        <motion.section 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-[2px] bg-cyan-400 mb-6"></div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Our <span className="text-cyan-400">Portfolio</span>
          </h1>
          <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl p-16 text-center">
            <div className="text-6xl mb-4">🚀</div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              No Works or Services Yet
            </h2>
            <p className="text-slate-400 max-w-md mx-auto">
              We're currently building amazing things. Check back soon to see our latest projects!
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-400">
                🛠️ In Development
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-400">
                💡 Coming Soon
              </span>
            </div>
          </div>
        </motion.section>
      </main>
    );
  }

  // Main Render
  return (
    <motion.main 
      className="min-h-screen bg-[#020617] px-6 md:px-16 py-16 text-white"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      
      {/* Hero Section */}
      <motion.section 
        className="max-w-6xl mx-auto mb-12"
        variants={fadeUp}
      >
        <motion.div 
          className="w-16 h-[2px] bg-cyan-400 mb-6"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ duration: 0.6 }}
        />
        <motion.h1 
          className="text-4xl md:text-6xl font-bold leading-tight"
          variants={fadeUp}
        >
          Our <span className="text-cyan-400">Portfolio</span>
        </motion.h1>
        <motion.p 
          className="mt-4 text-slate-400 max-w-xl text-lg"
          variants={fadeUp}
        >
          Exploring the intersection of technical precision and creative momentum.
        </motion.p>
        
        <motion.div 
          className="mt-6 flex flex-wrap items-center gap-6"
          variants={fadeUp}
        >
          <span className="text-sm text-slate-500">
            {services.length} {services.length === 1 ? 'project' : 'projects'} available
          </span>
          {services.filter(s => s.featured).length > 0 && (
            <span className="text-xs bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full border border-yellow-500/30">
              ⭐ {services.filter(s => s.featured).length} featured
            </span>
          )}
          {filteredProjects.length !== services.length && (
            <span className="text-xs bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/30">
              🔍 {filteredProjects.length} results
            </span>
          )}
        </motion.div>
      </motion.section>

      {/* Search and Filter Bar */}
      <motion.section 
        className="max-w-6xl mx-auto mb-10"
        variants={staggerContainer}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1 relative">
            <motion.div 
              className="relative"
              variants={fadeUp}
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects by name, category, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition"
                >
                  <X size={16} />
                </button>
              )}
            </motion.div>
          </div>

          <div className="flex md:hidden items-center gap-2 overflow-x-auto pb-2">
            <Filter size={16} className="text-slate-500 flex-shrink-0" />
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition ${
                  activeFilter === f
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="hidden md:flex flex-wrap gap-2 flex-shrink-0">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  activeFilter === f
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    : "bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="flex md:hidden items-center gap-2 mt-3 text-xs text-slate-500">
          <span className="font-medium">Filter:</span>
          <span className="text-cyan-400">{activeFilter}</span>
          {searchQuery && (
            <>
              <span className="text-slate-600">|</span>
              <span>Search: "{searchQuery}"</span>
            </>
          )}
        </div>
      </motion.section>

      {/* Projects Grid */}
      <motion.section 
        className="max-w-6xl mx-auto"
        variants={staggerCards}
      >
        {filteredProjects.length === 0 ? (
          <motion.div 
            className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center"
            variants={fadeUp}
          >
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No matching projects
            </h3>
            <p className="text-slate-400 max-w-md mx-auto">
              {searchQuery 
                ? `No projects found matching "${searchQuery}". Try adjusting your search.`
                : `No projects found in "${activeFilter}".`}
            </p>
            {(searchQuery || activeFilter !== "All Projects") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("All Projects");
                }}
                className="mt-4 text-cyan-400 hover:text-cyan-300 transition"
              >
                Clear all filters →
              </button>
            )}
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((p, i) => (
              <motion.div
                key={p.id || i}
                className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${p.gradient} p-6 md:p-8 min-h-[280px] flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10`}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Featured Image */}
                  {p.imageUrl && (
                    <motion.div 
                      className="mb-4 rounded-xl overflow-hidden h-48 w-full"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={p.imageUrl}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </motion.div>
                  )}

                  {/* Tags */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full text-slate-300">
                      {p.tag}
                    </span>
                    {p.featured && (
                      <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full border border-yellow-500/30 animate-pulse">
                        ⭐ Featured
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="mt-4 text-2xl md:text-3xl font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                    {p.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-3 text-slate-400 max-w-md line-clamp-3 flex-1">
                    {p.desc}
                  </p>

                  {/* Technologies */}
                  {p.technologies.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 bg-white/5 rounded-full text-slate-400 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {p.technologies.length > 4 && (
                        <span className="text-xs text-slate-500">
                          +{p.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Action Button */}
                  <div className="mt-6">
                    {p.button && p.liveUrl ? (
                      <motion.a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:opacity-90 hover:scale-105 duration-300 shadow-lg shadow-cyan-500/25"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project <ArrowRight size={16} />
                      </motion.a>
                    ) : (
                      <motion.button 
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition border border-white/20 text-white hover:bg-white/10 hover:border-cyan-500/30 duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More <ArrowRight size={16} />
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.section>
    </motion.main>
  );
}