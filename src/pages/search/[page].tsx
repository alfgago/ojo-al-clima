import Head from 'next/head';
import parse from "html-react-parser"
import { dehydrate } from 'react-query/hydration';
import { cleanYoast, queryClient } from "@/utils";
import { fetchPostData } from '@/pages/api/posts';
import { fetchSearchData } from '../api/search';
import { SearchComponets } from '@/components';

export default function Search({ data, recents }: any) {

  const { yoast } = data;

  return (
    <>
      <Head>{parse(yoast)}</Head>
      <SearchComponets data={data} recents={recents} />
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  try {
    const { page } = context.params;
    const { q = '', author = '' } = context.query;

    const data = await fetchSearchData(q, author, parseInt(page, 10), 30) as { yoast: string };
    const currentURL = `${process.env.NEXT_PUBLIC_DOMAIN}${context.resolvedUrl}`;
    const cleanedYoast = cleanYoast(data.yoast, currentURL)
  
    const recents = await fetchPostData('recents', 60);

    if (!data) {
      return {
        redirect: {
          destination: '/', // dirección del home
          permanent: false, // redirección temporal
        },
      };
    }

    return {
      props: {
        data: {
          ...data,
          yoast: cleanedYoast,
        },
        recents,
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};


