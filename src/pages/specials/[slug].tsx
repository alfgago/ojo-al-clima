import { dehydrate } from 'react-query/hydration';
import { queryClient } from "@/utils";
import { fetchSpecialData } from '../api/specials';
import { ArticleBanner } from '@/components';
import { SpecialStyle } from '@/components/specials/SpecialStyle';
import { SpecialsComponents } from '@/components/specials/SpecialComponents';

export default function Special({ special }: any) {
 
  const { blocks } = special;

  return (
    <article>
      <ArticleBanner {...special} />
      <SpecialStyle>
        <SpecialsComponents blocks={blocks} />
      </SpecialStyle>
    </article>
  );
}

export const getServerSideProps = async (context: any) => {
  
  const { slug } = context.params;
  const special = await fetchSpecialData(slug);

  return {
    props: {
      special,
      dehydratedState: dehydrate(queryClient),
    },
  };
}
