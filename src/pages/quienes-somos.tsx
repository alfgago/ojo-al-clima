import { dehydrate } from 'react-query/hydration';
import { queryClient } from "@/utils";
import { fetchPageData } from "@/pages/api/pages";
import { ArticleComponents, QuienesSomosStyle } from '@/components';
import { useEffect } from 'react';

export default function QuienesSomos({ page }: any) {

  const { blocks } = page;

  //Usando para hacer scroll pasando # por url
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // quitar el "#"
      if (element) {
        setTimeout(() => {
          const rect = element.getBoundingClientRect();
          const topPosition = rect.top + window.pageYOffset - 50; // restamos 50px
          window.scrollTo({
            top: topPosition,
            behavior: "smooth"
          });
        }, 100); // Retraso de 100ms, ajusta según necesidad
      }
    }
  }, []);

  return (
    <QuienesSomosStyle>
      <div className="banner"></div>
      <ArticleComponents blocks={blocks} />
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



