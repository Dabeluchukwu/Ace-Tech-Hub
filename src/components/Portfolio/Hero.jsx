"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { getServices } from "@/lib/api";

// Fallback filters if no services exist
const defaultFilters = [
  "All Projects",
  "Web Development",
  "Software Consultancy",
  "Cloud Solutions",
  "Enterprise Software",
];

export default function PortfolioHero() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
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
      
      // Dynamically generate filters from categories
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
    tag: service.category || "Project",
    category: service.category || "Uncategorized",
    title: service.title || "Untitled Project",
    desc: service.description || "No description available.",
    gradient: service.featured 
      ? "from-cyan-500/20 to-blue-600/10" 
      : "from-slate-700/40 to-slate-900",
    button: !!service.liveUrl,
    liveUrl: service.liveUrl,
    technologies: service.technologies || [],
    featured: service.featured || false,
  });

  const projects = services.map(mapServiceToProject);

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Loading State
  if (loading) {
    return (
      <main className="min-h-screen bg-[#020617] px-6 md:px-16 py-16 text-white">
        <section className="max-w-6xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            ACE Tech <span className="text-cyan-400">Hub</span>
          </h1>
          <p className="mt-6 text-slate-400 max-w-xl text-lg">
            Architecting digital stability and fluid evolution through our past
            successes. Explore the intersection of technical precision and
            creative momentum.
          </p>
        </section>
        
        {/* Loading Skeleton */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-700/20 to-slate-900 p-6 md:p-8 min-h-[260px] flex flex-col justify-end animate-pulse"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.05),transparent_60%)]" />
              <div className="relative z-10">
                <div className="h-6 w-24 bg-white/10 rounded-full mb-4"></div>
                <div className="h-8 w-48 bg-white/10 rounded mb-3"></div>
                <div className="h-4 w-full bg-white/10 rounded mb-2"></div>
                <div className="h-4 w-3/4 bg-white/10 rounded mb-4"></div>
                <div className="h-10 w-36 bg-white/10 rounded-full"></div>
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
        <section className="max-w-6xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            ACE Tech <span className="text-cyan-400">Hub</span>
          </h1>
          <p className="mt-6 text-slate-400 max-w-xl text-lg">
            Architecting digital stability and fluid evolution through our past
            successes. Explore the intersection of technical precision and
            creative momentum.
          </p>
        </section>
        
        {/* Error Message */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-4">⚠️</div>
            <h2 className="text-2xl font-semibold text-red-400 mb-2">
              Unable to Load Services
            </h2>
            <p className="text-slate-400 max-w-md mx-auto">{error}</p>
            <button
              onClick={fetchServices}
              className="mt-6 px-6 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition border border-cyan-500/30"
            >
              Try Again
            </button>
          </div>
        </section>
      </main>
    );
  }

  // No Services State
  if (services.length === 0) {
    return (
      <main className="min-h-screen bg-[#020617] px-6 md:px-16 py-16 text-white">
        <section className="max-w-6xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            ACE Tech <span className="text-cyan-400">Hub</span>
          </h1>
          <p className="mt-6 text-slate-400 max-w-xl text-lg">
            Architecting digital stability and fluid evolution through our past
            successes. Explore the intersection of technical precision and
            creative momentum.
          </p>
        </section>
        
        {/* Empty State */}
        <section className="max-w-6xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">🚀</div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              No Works or Services Yet
            </h2>
            <p className="text-slate-400 max-w-md mx-auto">
              We're currently building amazing things. Check back soon to see our latest projects and services!
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-400">
                🛠️ In Development
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-400">
                💡 Coming Soon
              </span>
              <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-400">
                ✨ Stay Tuned
              </span>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Main Render - With Services
  return (
    <main className="min-h-screen bg-[#020617] px-6 md:px-16 py-16 text-white">
      
      {/* HERO */}
      <section className="max-w-6xl mx-auto mb-16">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          ACE Tech{" "}
          <span className="text-cyan-400">Hub</span>
        </h1>

        <p className="mt-6 text-slate-400 max-w-xl text-lg">
          Architecting digital stability and fluid evolution through our past
          successes. Explore the intersection of technical precision and
          creative momentum.
        </p>
        
        {/* Service Count Badge */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-sm text-slate-500">
            {services.length} {services.length === 1 ? 'project' : 'projects'} available
          </span>
          {services.filter(s => s.featured).length > 0 && (
            <span className="text-xs bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full border border-yellow-500/30">
              ⭐ {services.filter(s => s.featured).length} featured
            </span>
          )}
        </div>
      </section>

      {/* FILTERS */}
      <section className="max-w-6xl mx-auto mb-10 flex flex-wrap gap-3">
        {filters.map((f, i) => (
          <button
            key={i}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-full text-sm border transition
            ${
              activeFilter === f
                ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
            }`}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto">
        {filteredProjects.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
            <p className="text-slate-400">No projects found for "{activeFilter}"</p>
            <button
              onClick={() => setActiveFilter("All Projects")}
              className="mt-4 text-cyan-400 hover:text-cyan-300 transition"
            >
              View all projects →
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((p, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${p.gradient} p-6 md:p-8 min-h-[260px] flex flex-col justify-end group hover:border-cyan-500/30 transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(56,189,248,0.15),transparent_60%)] group-hover:opacity-80 transition-opacity" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full text-slate-300">
                      {p.tag}
                    </span>
                    {p.featured && (
                      <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full border border-yellow-500/30">
                        ⭐ Featured
                      </span>
                    )}
                    {p.technologies.length > 0 && (
                      <span className="text-xs text-slate-500">
                        {p.technologies.slice(0, 3).join(' • ')}
                        {p.technologies.length > 3 && ` +${p.technologies.length - 3}`}
                      </span>
                    )}
                  </div>

                  <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
                    {p.title}
                  </h2>

                  <p className="mt-3 text-slate-400 max-w-md line-clamp-3">
                    {p.desc}
                  </p>

                  {p.button && p.liveUrl ? (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm transition bg-gradient-to-r from-cyan-400 to-blue-500 text-black hover:opacity-80"
                    >
                      View Project <ArrowRight size={16} />
                    </a>
                  ) : (
                    <button
                      className="mt-6 inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm transition border border-white/20 text-white hover:bg-white/10"
                    >
                      Learn More <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}