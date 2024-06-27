import request from "utils/request";

const getOrders = async (data) => request(`/payment/channel?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data)
const getBulkOrders = async (data) => request(`/orders/bulkorder?page=${data?.pageNo}&perpageitems=${data?.pageCount}`, 'GET', data)
const getOrderById = async (data) => request(`/payment/${data?.id}`, 'GET', data)
const editChannel = async (data) => request(`/payment/`, 'PATCH', data)
const editVideo = async (data) => request(`/payment/video/`, 'PATCH', data)
const deleteChannel = async (data) => request(`/payment/${data?._id}`, 'DELETE', data)

export {
  getOrders,
  getOrderById,
  getBulkOrders,
  editChannel,
  deleteChannel,
  editVideo
};
