import Head from 'next/head';
import parse from "html-react-parser"
import { dehydrate } from 'react-query/hydration';
import { cleanYoast, queryClient } from "@/utils";
import { fetchPageData } from "@/pages/api/pages";
import { ArticleComponents, QuienesSomosStyle } from '@/components';
import { useEffect } from 'react';

export default function QuienesSomos({ page }: any) {

  const { blocks, yoast } = page;

  //Usando para hacer scroll pasando # por url
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // quitar el "#"
      if (element) {
        setTimeout(() => {
          const rect = element.getBoundingClientRect();
          const topPosition = rect.top + window.pageYOffset - 50; // restamos 50px
          window.scrollTo({
            top: topPosition,
            behavior: "smooth"
          });
        }, 100); // Retraso de 100ms, ajusta según necesidad
      }
    }
  }, []);

  return (
    <>
      <Head>{parse(yoast)}</Head>
      <QuienesSomosStyle>
        <div className="banner"></div>
        <ArticleComponents blocks={blocks} />
      </QuienesSomosStyle>
    </>
  );
}

export const getServerSideProps = async (context:any) => {
  const page = await fetchPageData('quienes-somos', 30) as { yoast: string };
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



