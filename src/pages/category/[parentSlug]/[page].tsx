import Head from 'next/head';
import parse from "html-react-parser"

import { dehydrate } from 'react-query/hydration';
import { cleanYoast, queryClient } from "@/utils";
import { fetchCategoryData } from '@/services/categories';
import { fetchPostData } from '@/services/posts';
import { CategoryComponents } from '@/components';
import { layoutPageData } from '@/services/layout';

export default function Category({ data, recents, form }: any) {

  const { yoast } = data;

  return (
    <>
      <Head>{parse(yoast)}</Head>
      <CategoryComponents data={data} recents={recents} form={form} />
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const { parentSlug, page } = context.params;

  const data = await fetchCategoryData(parentSlug, parseInt(page, 10), 30) as { yoast: string };
  const currentURL = `${process.env.NEXT_PUBLIC_DOMAIN}${context.resolvedUrl}`;
  const cleanedYoast = cleanYoast(data.yoast, currentURL)

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


