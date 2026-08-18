// import apiClient from "./apiClient";

// // ============ AUTH ============
// export const login = async (email, password) => {
//   const response = await apiClient.post("/api/auth/login", { email, password });
//   return response.data;
// };

// export const getMe = async () => {
//   const response = await apiClient.get("/api/auth/me");
//   return response.data;
// };

// // ============ SERVICES ============
// export const getServices = async (params = {}) => {
//   const response = await apiClient.get("/api/services", { params });
//   return response.data;
// };

// export const getService = async (id) => {
//   const response = await apiClient.get(`/api/services/${id}`);
//   return response.data;
// };

// export const createService = async (data) => {
//   const response = await apiClient.post("/api/services", data);
//   return response.data;
// };

// export const updateService = async (id, data) => {
//   const response = await apiClient.put(`/api/services/${id}`, data);
//   return response.data;
// };

// export const deleteService = async (id) => {
//   const response = await apiClient.delete(`/api/services/${id}`);
//   return response.data;
// };

// export const toggleFeatured = async (id) => {
//   const response = await apiClient.put(`/api/services/${id}/toggle-featured`);
//   return response.data;
// };

// // ============ BLOG ============
// export const getBlogs = async (params = {}) => {
//   const response = await apiClient.get("/api/blog", { params });
//   return response.data;
// };

// export const getBlogBySlug = async (slug) => {
//   const response = await apiClient.get(`/api/blog/${slug}`);
//   return response.data;
// };

// export const getBlogById = async (id) => {
//   const response = await apiClient.get(`/api/blog/id/${id}`);
//   return response.data;
// };

// export const createBlog = async (data) => {
//   const response = await apiClient.post("/api/blog", data);
//   return response.data;
// };

// export const updateBlog = async (id, data) => {
//   const response = await apiClient.put(`/api/blog/${id}`, data);
//   return response.data;
// };

// export const deleteBlog = async (id) => {
//   const response = await apiClient.delete(`/api/blog/${id}`);
//   return response.data;
// };

// export const toggleBlogStatus = async (id) => {
//   const response = await apiClient.put(`/api/blog/${id}/toggle-status`);
//   return response.data;
// };

// // ============ MESSAGES ============
// export const getMessages = async (params = {}) => {
//   const response = await apiClient.get("/api/messages", { params });
//   return response.data;
// };

// export const getMessage = async (id) => {
//   const response = await apiClient.get(`/api/messages/${id}`);
//   return response.data;
// };

// export const sendMessage = async (data) => {
//   const response = await apiClient.post("/api/messages", data);
//   return response.data;
// };

// export const replyMessage = async (id, reply) => {
//   const response = await apiClient.put(`/api/messages/${id}/reply`, { reply });
//   return response.data;
// };

// export const deleteMessage = async (id) => {
//   const response = await apiClient.delete(`/api/messages/${id}`);
//   return response.data;
// };

// // ✅ ADD THIS - Update message status
// export const updateMessageStatus = async (id, status) => {
//   const response = await apiClient.put(`/api/messages/${id}/status`, {
//     status,
//   });
//   return response.data;
// };

// // ============ NOTIFICATIONS ============
// export const getNotifications = async (params = {}) => {
//   // ✅ ADDED /api/ prefix
//   const response = await apiClient.get("/api/notifications", { params });
//   return response.data;
// };

// export const markNotificationRead = async (id) => {
//   // ✅ ADDED /api/ prefix
//   const response = await apiClient.put(`/api/notifications/${id}/read`);
//   return response.data;
// };

// export const markAllNotificationsRead = async () => {
//   // ✅ ADDED /api/ prefix
//   const response = await apiClient.put("/api/notifications/mark-all-read");
//   return response.data;
// };

// // ✅ ADD THIS - Delete notification
// export const deleteNotification = async (id) => {
//   const response = await apiClient.delete(`/api/notifications/${id}`);
//   return response.data;
// };

// // ============ DASHBOARD ============
// export const getDashboardStats = async () => {
//   // ✅ ADDED /api/ prefix
//   const response = await apiClient.get("/api/dashboard/stats");
//   return response.data;
// };

// // ============ UPLOAD CLOUDFLARE R2 ============
// export const uploadImage = async (imageData, filename, folder = "blog") => {
//   try {
//     const response = await apiClient.post("/api/upload", {
//       image: imageData,
//       filename: filename,
//       folder: folder,
//     });
//     return response.data;
//   } catch (error) {
//     console.error("❌ R2 upload error:", error);
//     throw error;
//   }
// };

// export const deleteImage = async (key) => {
//   try {
//     const response = await apiClient.delete(`/api/upload/${key}`);
//     return response.data;
//   } catch (error) {
//     console.error("❌ R2 delete error:", error);
//     throw error;
//   }
// };


import apiClient from './apiClient';

// ============ AUTH ============
export const login = async (email, password) => {
  const response = await apiClient.post('/api/auth/login', { email, password });
  return response.data;
};

export const getMe = async () => {
  const response = await apiClient.get('/api/auth/me');
  return response.data;
};

// ============ SERVICES ============
export const getServices = async (params = {}) => {
  const response = await apiClient.get('/api/services', { params });
  return response.data;
};

export const getService = async (id) => {
  const response = await apiClient.get(`/api/services/${id}`);
  return response.data;
};

export const createService = async (data) => {
  const response = await apiClient.post('/api/services', data);
  return response.data;
};

export const updateService = async (id, data) => {
  const response = await apiClient.put(`/api/services/${id}`, data);
  return response.data;
};

export const deleteService = async (id) => {
  const response = await apiClient.delete(`/api/services/${id}`);
  return response.data;
};

export const toggleFeatured = async (id) => {
  const response = await apiClient.put(`/api/services/${id}/toggle-featured`);
  return response.data;
};

// ============ BLOG ============
export const getBlogs = async (params = {}) => {
  const response = await apiClient.get('/api/blog', { params });
  return response.data;
};

export const getBlogBySlug = async (slug) => {
  const response = await apiClient.get(`/api/blog/${slug}`);
  return response.data;
};

export const getBlogById = async (id) => {
  const response = await apiClient.get(`/api/blog/id/${id}`);
  return response.data;
};

export const createBlog = async (data) => {
  const response = await apiClient.post('/api/blog', data);
  return response.data;
};

export const updateBlog = async (id, data) => {
  const response = await apiClient.put(`/api/blog/${id}`, data);
  return response.data;
};

export const deleteBlog = async (id) => {
  const response = await apiClient.delete(`/api/blog/${id}`);
  return response.data;
};

export const toggleBlogStatus = async (id) => {
  const response = await apiClient.put(`/api/blog/${id}/toggle-status`);
  return response.data;
};

// ============ MESSAGES ============
export const getMessages = async (params = {}) => {
  const response = await apiClient.get('/api/messages', { params });
  return response.data;
};

export const getMessage = async (id) => {
  const response = await apiClient.get(`/api/messages/${id}`);
  return response.data;
};

export const sendMessage = async (data) => {
  const response = await apiClient.post('/api/messages', data);
  return response.data;
};

export const replyMessage = async (id, reply) => {
  const response = await apiClient.put(`/api/messages/${id}/reply`, { reply });
  return response.data;
};

export const deleteMessage = async (id) => {
  const response = await apiClient.delete(`/api/messages/${id}`);
  return response.data;
};

export const updateMessageStatus = async (id, status) => {
  const response = await apiClient.put(`/api/messages/${id}/status`, { status });
  return response.data;
};

// ============ NOTIFICATIONS ============
export const getNotifications = async (params = {}) => {
  const response = await apiClient.get('/api/notifications', { params });
  return response.data;
};

export const markNotificationRead = async (id) => {
  const response = await apiClient.put(`/api/notifications/${id}/read`);
  return response.data;
};

export const markAllNotificationsRead = async () => {
  const response = await apiClient.put('/api/notifications/mark-all-read');
  return response.data;
};

export const deleteNotification = async (id) => {
  const response = await apiClient.delete(`/api/notifications/${id}`);
  return response.data;
};

// ============ DASHBOARD ============
export const getDashboardStats = async () => {
  const response = await apiClient.get('/api/dashboard/stats');
  return response.data;
};

// ============ UPLOAD ============
export const uploadImage = async (imageData, filename, folder = 'blog') => {
  try {
    const response = await apiClient.post('/api/upload', {
      image: imageData,
      filename: filename,
      folder: folder,
    });
    return response.data;
  } catch (error) {
    console.error('❌ R2 upload error:', error);
    throw error;
  }
};

export const deleteImage = async (key) => {
  try {
    const response = await apiClient.delete(`/api/upload/${key}`);
    return response.data;
  } catch (error) {
    console.error('❌ R2 delete error:', error);
    throw error;
  }
};
