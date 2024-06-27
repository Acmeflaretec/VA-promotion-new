import request from "utils/request";

const addBlogs = async (data) => request(`/ads`, 'POST', data)
const editBlogs = async (data) => request(`/ads`, 'PATCH', data)
const deleteBlogs = async (data) => request(`/ads/${data?._id}`, 'DELETE', data)
const getBlogs = async (data) => request(`/ads?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data)
const getBlogsById = async (data) => request(`/ads/getads/${data?.id}`, 'GET', data)
const addBanners = async (data) => request(`/payment`, 'POST', data)
const editBanners = async (data) => request(`/payment`, 'PATCH', data)
const deleteBanners = async (data) => request(`/payment/${data?._id}`, 'DELETE', data)
const getBanners = async (data) => request(`/payment/video?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data)
const getBannersById = async (data) => request(`/payment/${data?.id}`, 'GET', data)

export {
    addBlogs,
    editBlogs,
    deleteBlogs,
    getBlogs,
    getBlogsById,
    addBanners,
    editBanners,
    deleteBanners,
    getBanners,
    getBannersById,
  };
