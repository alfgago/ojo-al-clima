import { dehydrate } from 'react-query/hydration';
import { queryClient } from "@/utils";
import { fetchLearnData } from './api/learn';
import { LearnPage } from '@/components';

export default function Causas({ page }: any) {
  return (
    <LearnPage data={page}/>
  );
}

export const getServerSideProps = async () => {
  const page = await fetchLearnData('causas', 3000);

  return {
    props: {
      page,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
