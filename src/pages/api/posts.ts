import { customAPI } from "./base";
import { queryClient } from "@/utils"; 

export const fetchPostData = async (slug: string, staleTime?: number) => {
  await queryClient.prefetchQuery(
    ['postData', slug], 
    async () => {
      const response = await customAPI.get(`/posts/${slug}`);
      console.log('request posts data:', slug);
      return response.data;
    }, 
    { staleTime: staleTime ? staleTime * 1000 : undefined } 
  );

  return queryClient.getQueryData(['postData', slug]);
};
