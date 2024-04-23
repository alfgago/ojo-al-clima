import Head from 'next/head';
import parse from "html-react-parser"
import { dehydrate } from 'react-query/hydration';
import { cleanYoast, queryClient } from "@/utils";
import { fetchPostData } from '@/services/posts';
import { ArticleBanner, ArticleComponents, Recents } from '@/components';
import { ArticleStyle } from '@/components/article/ArticleSyle';
import { layoutPageData } from '../../services/layout';

export default function Post({ post, recents, form }: any) {

  const { category, blocks, yoast } = post;
  const { color } = category;

  return (
    <>
      <Head>{parse(yoast)}</Head>
      <article>
        <ArticleBanner {...post} />
        <ArticleStyle color={color}>
          <ArticleComponents blocks={blocks} />
          <Recents articles={recents} form={form} />
        </ArticleStyle>
      </article>
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  const { slug } = context.params;

  const post = await fetchPostData(slug, 30) as { yoast: string };
  const currentURL = `${process.env.NEXT_PUBLIC_DOMAIN}${context.resolvedUrl}`;
  const cleanedYoast = cleanYoast(post.yoast, currentURL)

  const recents = await fetchPostData('recents', 60);
  const form = await layoutPageData('newsletter', 60);

  return {
    props: {
      post: {
        ...post,
        yoast: cleanedYoast,
      },
      recents,
      form,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
