
import { dehydrate } from 'react-query/hydration';
import { queryClient } from "@/utils";
import { fetchPostData } from '@/pages/api/posts';
import { fetchSearchData } from '../api/search';
import { SearchComponets } from '@/components';

export default function Search({ data, recents }: any) {
  return (
    <>
      <SearchComponets data={data} recents={recents} />
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  try {
    const { page } = context.params;
    const { q = '', author = '' } = context.query;

    const data = await fetchSearchData(q, author, parseInt(page, 10), 120);
    const recents = await fetchPostData('recents', 60);

    // Si no hay datos, redirige al usuario al home
    if (!data) {
      return {
        redirect: {
          destination: '/', // dirección del home
          permanent: false, // redirección temporal
        },
      };
    }

    return {
      props: {
        data,
        recents,
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
};


