import Head from 'next/head';
import parse from "html-react-parser"

import { dehydrate } from 'react-query/hydration';
import { cleanYoast, queryClient } from "@/utils";
import { fetchPageData } from "@/pages/api/pages";
import { PageComponents, PageStyle } from '@/components';


export default function Home({ page }: any) {
  const { blocks, yoast } = page;

  return (
    <>
      <Head>{parse(yoast)}</Head>
      <PageStyle>
        <PageComponents blocks={blocks} />
      </PageStyle>
    </>
  );
}

export const getServerSideProps = async () => {
  const page = await fetchPageData('home', 60);
  return {
    props: {
      page,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
