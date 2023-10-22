import { customAPI } from "./base";
import { queryClient } from "@/utils"; 

export const fetchSearchData = async (query: string, author: string, page: number, staleTime?: number) => {
  await queryClient.prefetchQuery(
    ['searchData', query, author, page], 
    async () => {
      const response = await customAPI.get(`/search?q=${query}&page=${page}&author=${author}`);
      console.log('request search data:', query, 'page:', page);
      
      // Prefetch next page if exists
      if (response.data.pagination.next_page) {
        queryClient.prefetchQuery(['searchData', query, author, response.data.pagination.next_page], 
        () => fetchSearchData(query, author, response.data.pagination.next_page));
      }

      return response.data;
    }, 
    { staleTime: staleTime ? staleTime * 1000 : undefined } 
  );

  return queryClient.getQueryData(['searchData', query, author, page]) || null;

};
