import { useQuery } from "react-query";
import agent from "Api/axios";

import { Photo, base_photo } from "Utils/Types/types";

const useGetGallery = () => {
  const {
    isLoading,
    data = [base_photo],
    error,
  } = useQuery<Photo[], Error>("Photos", async () => {
    try {
      const data = await agent.Gallery.getGallery();
      return data.data;
    } catch (err) {
      return err;
    }
  });
  const firstPhoto = data[0];
  return { isLoading, data, error, firstPhoto };
};

export default useGetGallery;
