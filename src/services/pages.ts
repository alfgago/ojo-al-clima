import { customAPI } from "./base";
import { queryClient } from "@/utils"; 

export const fetchPageData = async (slug: string, staleTime?: number) => {
  await queryClient.prefetchQuery(
    ['pageData', slug], 
    async () => {
      const response = await customAPI.get(`/pages/${slug}`);
      console.log('request page data:', slug);
      return response.data;
    }, 
    { staleTime: staleTime ? staleTime * 1000 : undefined } 
  );

  return queryClient.getQueryData(['pageData', slug]);
};
