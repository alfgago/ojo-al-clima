import Head from 'next/head';
import parse from "html-react-parser"

import { dehydrate } from 'react-query/hydration';
import { cleanYoast, queryClient } from "@/utils";
import { fetchSpecialData } from '../api/specials';
import { ArticleBanner } from '@/components';
import { SpecialStyle } from '@/components/specials/SpecialStyle';
import { SpecialsComponents } from '@/components/specials/SpecialComponents';

export default function Special({ special }: any) {

  const { blocks, yoast } = special;

  return (
    <>
      <Head>{parse(yoast)}</Head>
      <article>
        <ArticleBanner {...special} />
        <SpecialStyle>
          <SpecialsComponents blocks={blocks} />
        </SpecialStyle>
      </article>
    </>

  );
}

export const getServerSideProps = async (context: any) => {

  const { slug } = context.params;
  const special = await fetchSpecialData(slug) as { yoast: string };
  const currentURL = `${process.env.NEXT_PUBLIC_DOMAIN}${context.resolvedUrl}`;
  const cleanedYoast = cleanYoast(special.yoast, currentURL)


  return {
    props: {
      special: {
        ...special,
        yoast: cleanedYoast,
      },
      dehydratedState: dehydrate(queryClient),
    },
  };
}
