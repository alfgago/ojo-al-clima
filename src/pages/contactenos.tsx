import Head from 'next/head';
import parse from "html-react-parser"
import { dehydrate } from 'react-query/hydration';
import { cleanYoast, queryClient } from "@/utils";
import { fetchPageData } from "@/pages/api/pages";

export default function Contactenos({ page }: any)  {

  const { yoast } = page;

  return (
    <>
      <Head>{parse(yoast)}</Head>
    </>
  );
}

export const getServerSideProps = async (context:any) => {
  const page = await fetchPageData('contactenos', 60) as { yoast: string };
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



