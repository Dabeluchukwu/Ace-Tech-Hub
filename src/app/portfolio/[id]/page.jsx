"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Eye,
  Tag,
  Layers,
  CheckCircle,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { getService } from "@/lib/api";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (params?.id) {
      fetchProject();
    }
  }, [params?.id]);

  const fetchProject = async () => {
    try {
      setLoading(true);
      const response = await getService(params.id);
      setProject(response.data);
    } catch (err) {
      console.error("Error fetching project:", err);
      setError("Project not found");
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

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={40} className="text-cyan-400 animate-spin" />
          <p className="text-slate-400">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-[#020617] px-6 py-16 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Project Not Found
          </h2>
          <p className="text-slate-400 mb-6">
            {error || "The project you're looking for doesn't exist."}
          </p>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black rounded-full font-medium hover:bg-cyan-400 transition"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-[#020617] text-white"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Hero Section with Image */}
      <section className="relative">
        {project.imageUrl ? (
          <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-[#020617] z-10" />
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-end pb-16 px-6 md:px-16">
              <div className="max-w-6xl mx-auto w-full">
                <motion.div variants={fadeUp}>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition mb-4"
                  >
                    <ArrowLeft size={18} />
                    Back to Portfolio
                  </Link>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {project.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-2">
                      <Tag size={16} className="text-cyan-400" />
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full border border-yellow-500/30">
                        ⭐ Featured
                      </span>
                    )}
                    <span className="flex items-center gap-2">
                      <Calendar size={16} className="text-cyan-400" />
                      {formatDate(project.createdAt)}
                    </span>
                    <span className="flex items-center gap-2">
                      <Eye size={16} className="text-cyan-400" />
                      {project.views || 0} views
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ) : (
          <div className="px-6 md:px-16 py-16">
            <div className="max-w-6xl mx-auto">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition mb-6"
              >
                <ArrowLeft size={18} />
                Back to Portfolio
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <Tag size={16} className="text-cyan-400" />
                  {project.category}
                </span>
                {project.featured && (
                  <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full border border-yellow-500/30">
                    ⭐ Featured
                  </span>
                )}
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-cyan-400" />
                  {formatDate(project.createdAt)}
                </span>
                <span className="flex items-center gap-2">
                  <Eye size={16} className="text-cyan-400" />
                  {project.views || 0} views
                </span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
            variants={staggerContainer}
          >
            {/* Main Content */}
            <motion.div className="lg:col-span-2" variants={fadeUp}>
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Project Overview
                </h2>
                <p className="text-slate-400 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white/5 rounded-full text-sm text-slate-300 border border-white/5 hover:border-cyan-500/30 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div className="space-y-6" variants={fadeUp}>
              {/* Quick Actions */}
              <div className="bg-[#0D1F3A] rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full font-medium hover:opacity-90 transition"
                    >
                      Visit Live Project <ExternalLink size={18} />
                    </a>
                  )}
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-cyan-400/50 text-cyan-400 rounded-full font-medium hover:bg-cyan-400/10 transition"
                  >
                    Let's Build Something Similar <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Project Stats */}
              <div className="bg-[#0D1F3A] rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-semibold mb-4">Project Info</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Category</span>
                    <span className="text-white">{project.category}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Status</span>
                    <span className="text-green-400">✅ Completed</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400">Views</span>
                    <span className="text-white">{project.views || 0}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-400">Featured</span>
                    <span
                      className={
                        project.featured ? "text-yellow-400" : "text-slate-500"
                      }
                    >
                      {project.featured ? "⭐ Yes" : "No"}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
