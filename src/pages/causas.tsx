import Head from 'next/head';
import parse from "html-react-parser"
import { dehydrate } from 'react-query/hydration';
import { queryClient } from "@/utils";
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


export const getServerSideProps = async () => {
  const page = await fetchLearnData('causas', 30);

  return {
    props: {
      page,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
