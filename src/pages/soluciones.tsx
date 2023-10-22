import { dehydrate } from 'react-query/hydration';
import { queryClient } from "@/utils";
import { fetchLearnData } from './api/learn';
import { LearnPage } from '@/components';

export default function Soluciones({ page }: any) {
  return (
    <LearnPage data={page}/>
  );
}

export const getStaticProps = async () => {
  const page = await fetchLearnData('soluciones', 3000);

  return {
    props: {
      page,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
