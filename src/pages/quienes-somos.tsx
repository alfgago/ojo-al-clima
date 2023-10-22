import { dehydrate } from 'react-query/hydration';
import { queryClient } from "@/utils";
import { fetchPageData } from "@/pages/api/pages";
import { ArticleComponents, QuienesSomosStyle } from '@/components';

export default function QuienesSomos({ page }: any) {

  const { blocks } = page;

  return (
    <QuienesSomosStyle>
      <ArticleComponents blocks={blocks}/>
    </QuienesSomosStyle>
  );
}

export const getServerSideProps = async () => {
  const page = await fetchPageData('quienes-somos', 60);

  return {
    props: {
      page,
      dehydratedState: dehydrate(queryClient),
    },
  };
}



