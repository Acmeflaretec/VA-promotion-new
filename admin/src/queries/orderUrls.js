import request from "utils/request";

const getOrders = async (data) => request(`/payment/channel?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data)
const getBulkOrders = async (data) => request(`/orders/bulkorder?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data)
const getOrderById = async (data) => request(`/payment/${data?.id}`, 'GET', data)
const getReviewById = async (data) => request(`/reviews/${data?.id}`, 'GET', data)
const editVideo = async (data) => request(`/payment/video/`, 'PATCH', data)
const editChannel = async (data) => request(`/payment/`, 'PATCH', data)
const deleteChannel = async (data) => request(`/payment/${data?._id}`, 'DELETE', data)
const editReview = async (data) => request(`/reviews`, 'PATCH', data)
const deleteReview = async (data) => request(`/reviews/${data?._id}`, 'DELETE', data)

export {
  getReviewById,
  getOrders,
  getOrderById,
  getBulkOrders,
  editChannel,
  deleteChannel,
  editVideo,
  editReview,
  deleteReview,
};
