import { useMutation, useQuery, useQueryClient } from "react-query";
import { getBulkOrders, getOrderById, getOrders,editChannel ,deleteChannel,editVideo,editReview ,deleteReview,getReviewById} from "./orderUrls";

const useGetOrders = (data) => {
  return useQuery(["get_orders", data], () => getOrders(data), {
    staleTime: 3000,
    keepPreviousData: true,
    // refetchOnWindowFocus: false,
  });
};

const useGetBulkOrders = (data) => {
  return useQuery(["get_bulk_orders", data], () => getBulkOrders(data), {
    staleTime: 3000,
    keepPreviousData: true,
    // refetchOnWindowFocus: false,
  });
};

const useGetOrderById = (data) => {
  return useQuery(["get_orders", data], () => getOrderById(data), {
    // staleTime: 30000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
};
const useGetReviewById = (data) => {
  return useQuery(["get_orders", data], () => getReviewById(data), {
    // staleTime: 30000,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
};

const useEditchannel = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => editChannel(data), {
      
      onSuccess: (data) => {
          queryClient.invalidateQueries("get_blogs");
          return data;
      },
      onError: (data) => {
          return data;
      },
  });
};
const useEditVideo = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => editVideo(data), {
      
      onSuccess: (data) => {
          queryClient.invalidateQueries("get_blogs");
          return data;
      },
      onError: (data) => {
          return data;
      },
  });
};
const useDeleteChannel = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => deleteChannel(data), {
      onSuccess: (data) => {
          queryClient.invalidateQueries("get_blogs");
          return data;
      },
      onError: (data) => {
          return data;
      },
  });
};


const useEditReview = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => editReview(data), {
      
      onSuccess: (data) => {
          queryClient.invalidateQueries("get_blogs");
          return data;
      },
      onError: (data) => {
          return data;
      },
  });
};
const useDeleteReview = () => {
  const queryClient = useQueryClient();

  return useMutation((data) => deleteReview(data), {
      onSuccess: (data) => {
          queryClient.invalidateQueries("get_blogs");
          return data;
      },
      onError: (data) => {
          return data;
      },
  });
};

export {
  useGetOrders,
  useGetOrderById,
  useGetBulkOrders,
  useEditchannel,
  useDeleteChannel,
  useEditVideo,
  useEditReview,
  useDeleteReview,
  useGetReviewById
};
