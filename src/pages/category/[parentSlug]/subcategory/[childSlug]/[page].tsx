import Head from 'next/head';
import parse from "html-react-parser"
import { dehydrate } from 'react-query/hydration';
import { queryClient } from "@/utils";
import { fetchCategoryData } from '@/pages/api/categories';
import { fetchPostData } from '@/pages/api/posts';
import { CategoryComponents } from '@/components';

export default function Subcategory({ data, recents }: any) {

  const { yoast } = data;

  return (
    <>
      <Head>{parse(yoast)}</Head>
      <CategoryComponents data={data} recents={recents} />
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const { childSlug, page } = context.params;

  const data = await fetchCategoryData(childSlug, parseInt(page, 10), 10);  // 10s de cache aumentar en produccion
  const recents = await fetchPostData('recents', 60);

  return {
    props: {
      data,
      recents,
      dehydratedState: dehydrate(queryClient),
    },
  };
}


