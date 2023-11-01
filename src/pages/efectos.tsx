import { dehydrate } from 'react-query/hydration';
import { queryClient } from "@/utils";
import { fetchLearnData } from './api/learn';
import { LearnPage } from '@/components';

export default function Efectos({ page }: any) {
  return (
    <LearnPage data={page}/>
  );
}

export const getServerSideProps = async () => {
  const page = await fetchLearnData('efectos', 3000);

  return {
    props: {
      page,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
