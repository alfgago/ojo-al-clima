import Head from 'next/head';
import parse from "html-react-parser"
import { dehydrate } from 'react-query/hydration';
import { queryClient } from "@/utils";
import { fetchPageData } from "@/pages/api/pages";

export default function Contactenos({ page }: any)  {

  const { yoast } = page;

  return (
    <>
      <Head>{parse(yoast)}</Head>
    </>
  );
}

export const getServerSideProps = async () => {
  const page = await fetchPageData('contactenos', 60);

  return {
    props: {
      page,
      dehydratedState: dehydrate(queryClient),
    },
  };
}



