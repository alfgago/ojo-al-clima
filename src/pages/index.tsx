import { dehydrate } from 'react-query/hydration';
import { queryClient } from "@/utils";
import { fetchPageData } from "@/pages/api/pages";
import { PageComponents, PageStyle } from '@/components';

export default function Home({ page }: any) {

  const { blocks } = page;

  return (
    <PageStyle>
      <PageComponents blocks={blocks} />
    </PageStyle>
  );
}

export const getServerSideProps = async () => {
  const page = await fetchPageData('home', 60); 

  return {
    props: {
      page,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
