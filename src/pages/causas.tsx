import Head from 'next/head';
import parse from "html-react-parser"
import { dehydrate } from 'react-query/hydration';
import { cleanYoast, queryClient } from "@/utils";
import { fetchLearnData } from './api/learn';
import { LearnPage } from '@/components';

export default function Causas({ page }: any) {

  const { yoast } = page;

  return (
    <>
      <Head>{parse(yoast)}</Head>
      <LearnPage data={page} />
    </>
  );
}


export const getServerSideProps = async (context:any) => {
  const page = await fetchLearnData('causas', 30) as { yoast: string };
  const currentURL = `${process.env.NEXT_PUBLIC_DOMAIN}${context.resolvedUrl}`;
  const cleanedYoast = cleanYoast(page.yoast, currentURL)
  
  return {
    props: {
      page: {
        ...page,
        yoast: cleanedYoast,
      },
      dehydratedState: dehydrate(queryClient),
    },
  };
}
