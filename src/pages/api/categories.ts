import { customAPI } from "./base";
import { queryClient } from "@/utils"; 

export const fetchCategoryData = async (categoryName: string, page: number, staleTime?: number) => {
  await queryClient.prefetchQuery(
    ['categoryData', categoryName, page], 
    async () => {
      const response = await customAPI.get(`/categories/${categoryName}/${page}`);
      console.log('request category data:', categoryName, 'page:', page);
      
      // Prefetch next page if exists
      // if (response.data.pagination.next_page) {
      //   queryClient.prefetchQuery(['categoryData', categoryName, response.data.pagination.next_page], 
      //   () => fetchCategoryData(categoryName, response.data.pagination.next_page));
      // }

      return response.data;
    }, 
    { staleTime: staleTime ? staleTime * 1000 : undefined } 
  );

  return queryClient.getQueryData(['categoryData', categoryName, page]);
};
