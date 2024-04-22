import Head from 'next/head';
import parse from "html-react-parser"
import { dehydrate } from 'react-query/hydration';
import { cleanYoast, queryClient } from "@/utils";

import { fetchPostData } from '../api/posts';
import { layoutPageData } from '../api/layout';
import { CategoryComponents } from '@/components';
import { fetchAllSpecials, fetchSpecialData } from '../api/specials';

export default function Special({ data, recents, form }: any) {
  const { yoast} = data;

  return (
    <>
      <Head>{parse(yoast)}</Head>
      <CategoryComponents data={data} recents={recents} form={form} url="specials"/>

    </>
  );
}

export const getServerSideProps = async (context: any) => {
  const { page } = context.params;

  const data = await fetchAllSpecials(`special/${page}`, 60) as { yoast: string };

  const currentURL = `${process.env.NEXT_PUBLIC_DOMAIN}${context.resolvedUrl}`;
  const cleanedYoast = data ? cleanYoast(data.yoast, currentURL) : '';
  console.log('Data fetched:', data);
  const recents = await fetchPostData('recents', 60);
  const form = await layoutPageData('newsletter', 60);

  return {
    props: {
      data: {
        ...data,
        yoast: cleanedYoast,
      },
      recents,
      form,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
