import Head from 'next/head';
import parse from "html-react-parser"
import { dehydrate } from 'react-query/hydration';
import { queryClient } from "@/utils";
import { fetchPostData } from '@/pages/api/posts';
import { ArticleBanner, ArticleComponents, Recents } from '@/components';
import { ArticleStyle } from '@/components/article/ArticleSyle';

export default function Post({ post, recents }: any) {

  const { category, blocks, yoast } = post;
  const { color } = category;

  return (
    <>
      <Head>{parse(yoast)}</Head>
      <article>
        <ArticleBanner {...post} />
        <ArticleStyle color={color}>
          <ArticleComponents blocks={blocks} />
          <Recents articles={recents} />
        </ArticleStyle>
      </article>
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  const { slug } = context.params;

  const post = await fetchPostData(slug, 3 * 60);  // 3 minutos de cache
  const recents = await fetchPostData('recents', 60);

  return {
    props: {
      post,
      recents,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
