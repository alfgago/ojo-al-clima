import { dehydrate } from 'react-query/hydration';
import { queryClient } from "@/utils";
import { fetchLearnData } from './api/learn';
import { LearnPage } from '@/components';

export default function Evidencias({ page }: any) {
  return (
    <LearnPage data={page}/>
  );
}

export const getStaticProps = async () => {
  const page = await fetchLearnData('evidencias', 30000);

  return {
    props: {
      page,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
