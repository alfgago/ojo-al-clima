import { customAPI } from "./base";
import { queryClient } from "@/utils"; 

export const layoutPageData = async (slug: string, staleTime?: number) => {
  await queryClient.prefetchQuery(
    ['layoutData', slug], 
    async () => {
      const response = await customAPI.get(`/${slug}`);
      console.log('request layout data:', slug);
      return response.data;
    }, 
    { staleTime: staleTime ? staleTime * 1000 : 6000 } 
  );

  return queryClient.getQueryData(['layoutData', slug]);
};
