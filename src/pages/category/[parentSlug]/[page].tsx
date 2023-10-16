
import { dehydrate } from 'react-query/hydration';
import { queryClient } from "@/utils";
import { fetchCategoryData } from '@/pages/api/categories';
import { fetchPostData } from '@/pages/api/posts';
import { CategoryComponents } from '@/components';

export default function Category({ data, recents }: any) {
  return (
    <>
      <CategoryComponents data={data} recents={recents} />
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const { parentSlug, page } = context.params;

  const data = await fetchCategoryData(parentSlug, parseInt(page, 10), 120);  // 120s de cache aumentar en produccion
  const recents = await fetchPostData('recents', 60);

  return {
    props: {
      data,
      recents,
      dehydratedState: dehydrate(queryClient),
    },
  };
}


