import { customAPI } from "./base";
import { queryClient } from "@/utils"; 

export const fetchCategoryData = async (categoryName: string, page: number, staleTime?: number) => {
  await queryClient.prefetchQuery(
    ['categoryData', categoryName, page], 
    async () => {
      const response = await customAPI.get(`/categories/${categoryName}/${page}`);
      return response.data;
    }
  );

  return queryClient.getQueryData(['categoryData', categoryName, page]);
};
