import Head from "next/head"
import parse from "html-react-parser"
import { dehydrate } from "react-query/hydration"
import { cleanYoast, queryClient } from "@/utils"
import { fetchPageData } from "@/pages/api/pages"
import { PageComponents, PageStyle } from "@/components"

export default function Home({ page }: any) {
  const { blocks, yoast } = page

  return (
    <>
      <Head>{parse(yoast)}</Head>
      <PageStyle>
        <PageComponents blocks={blocks} />
      </PageStyle>
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  
  const page = await fetchPageData("home", 30) as { yoast: string };
  const currentURL = `${process.env.NEXT_PUBLIC_DOMAIN}${context.resolvedUrl}`;
  const cleanedYoast = cleanYoast(page.yoast, currentURL)

  return {
    props: {
      page: {
        ...page,
        yoast: cleanedYoast,
      },
      dehydratedState: dehydrate(queryClient),
    },
  }
}
