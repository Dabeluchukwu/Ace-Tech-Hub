"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, BookOpen, Star, ExternalLink, Loader2 } from 'lucide-react';
import { getCertificates } from '@/lib/api';

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

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      setLoading(true);
      const response = await getCertificates();
      setCertificates(response.data);
    } catch (err) {
      console.error('Error fetching certificates:', err);
      setError('Failed to load certificates');
    } finally {
      setLoading(false);
    }
  };

  // Filter certificates by type
  const filteredCertificates = filter === 'All' 
    ? certificates 
    : certificates.filter(c => c.type === filter);

  // Get unique types for filter
  const types = ['All', ...new Set(certificates.map(c => c.type))];

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
      <div className="min-h-screen bg-[#0b1220] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={40} className="text-cyan-400 animate-spin" />
          <p className="text-slate-400">Loading certificates...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0b1220] px-6 py-16 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-semibold text-white mb-2">Unable to Load</h2>
          <p className="text-slate-400 mb-6">{error}</p>
          <button
            onClick={fetchCertificates}
            className="px-6 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition border border-cyan-500/30"
          >
            Try Again
          </button>
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
            Certificates & <span className="text-cyan-400">Awards</span>
          </motion.h1>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            variants={fadeUp}
          >
            Recognitions and achievements that reflect our commitment to excellence
          </motion.p>
          {certificates.length > 0 && (
            <motion.p 
              className="text-sm text-gray-500 mt-4"
              variants={fadeUp}
            >
              {certificates.length} {certificates.length === 1 ? 'credential' : 'credentials'} earned
            </motion.p>
          )}
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        {/* Filter Buttons */}
        {types.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  filter === type
                    ? 'bg-cyan-500 text-black'
                    : 'bg-[#0D1F3A] text-gray-400 hover:text-white border border-white/5 hover:border-cyan-500/30'
                }`}
              >
                {type === 'All' ? 'All' : type}
              </button>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredCertificates.length === 0 ? (
          <div className="bg-[#0D1F3A] rounded-3xl p-16 text-center border border-white/5">
            <div className="text-6xl mb-4">📜</div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              No {filter !== 'All' ? filter : ''} credentials found
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
              {filter !== 'All' 
                ? `No ${filter.toLowerCase()}s available at the moment.` 
                : 'Check back soon for updates.'}
            </p>
          </div>
        ) : (
          /* Certificates Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert) => (
              <motion.div
                key={cert._id}
                className="group bg-[#0D1F3A] rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10"
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                {cert.imageUrl ? (
                  <div className="relative h-48 overflow-hidden bg-[#0b1220]">
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F3A] to-transparent opacity-60" />
                    {cert.featured && (
                      <span className="absolute top-3 right-3 bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full border border-yellow-500/30 flex items-center gap-1">
                        <Star size={12} /> Featured
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="h-48 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center relative">
                    <span className="text-6xl opacity-20">
                      {cert.type === 'Certificate' ? '📜' : '🏆'}
                    </span>
                    {cert.featured && (
                      <span className="absolute top-3 right-3 bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full border border-yellow-500/30 flex items-center gap-1">
                        <Star size={12} /> Featured
                      </span>
                    )}
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Type Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      cert.type === 'Certificate' 
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/20'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/20'
                    }`}>
                      {cert.type === 'Certificate' ? (
                        <span className="flex items-center gap-1"><BookOpen size={12} /> Certificate</span>
                      ) : (
                        <span className="flex items-center gap-1"><Award size={12} /> Award</span>
                      )}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition mb-1">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-sm text-gray-400 mb-3">
                    {cert.issuer}
                  </p>

                  {/* Date */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <Calendar size={14} className="text-cyan-400" />
                    <span>{formatDate(cert.date)}</span>
                  </div>

                  {/* Description */}
                  {cert.description && (
                    <p className="text-sm text-gray-400 mt-3 line-clamp-2">
                      {cert.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </motion.div>
  );
}