import { customAPI } from "./base";
import { queryClient } from "@/utils"; 

export const fetchSpecialData = async (slug: string) => {
  await queryClient.prefetchQuery(
    ['specialData', slug], 
    async () => {
      const response = await customAPI.get(`/specials/${slug}`);
      console.log('request special data:', slug);
      return response.data;
    }, 
    { staleTime: 60 * 1000 } 
  );

  return queryClient.getQueryData(['specialData', slug]);
};


export const fetchAllSpecials = async (slug: string , staleTime?: number) => {
  await queryClient.prefetchQuery(
    ['specialDataPage', slug], 
    async () => {
      const response = await customAPI.get(`/${slug}/`); 
      console.log('request special data:', response);
      return response.data; 
    }, 
    { staleTime: 60 * 1000 } 
  );
  return queryClient.getQueryData(['specialDataPage', slug]);
};