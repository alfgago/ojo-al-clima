import { customAPI } from "./base";
import { queryClient } from "@/utils"; 

export const fetchLearnData = async (slug: string, staleTime?: number) => {
  await queryClient.prefetchQuery(
    ['learnData', slug], 
    async () => {
      const response = await customAPI.get(`/learn/${slug}`);
      console.log('request learn data:', slug);
      return response.data;
    }, 
    { staleTime: staleTime ? staleTime * 1000 : undefined } 
  );

  return queryClient.getQueryData(['learnData', slug]);
};
