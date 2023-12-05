import { useQuery, useQueries } from "react-query"
import { ARTICLE_COMPONENTS } from "@/constants/articleComponents"
import { ADS_GROUPS } from "@/constants/adsGroups"
import { fetchAdsData } from "@/pages/api/ads"
import { AdBlock } from "../ads"
import { AdController } from "../ad-controller"

export const ArticleComponents = ({ blocks }: any) => {
  const { data: adsGroup } = useQuery("articles-content", () =>
    fetchAdsData(ADS_GROUPS["articles-content"])
  )
  let paragraphCount = 0

  // Solicitudes para cada ID de anuncio
  const adsQueries = useQueries(
    adsGroup?.ads?.map((adId: any): any => ({
      queryKey: ["adDetails", adId],
      queryFn: () => fetchAdsData(`ads/${adId}`),
    })) || []
  )

  const renderContentWithAds = () => {
    let content = [] as any
    let adIndex = 0

    blocks.forEach((block: any, index: number) => {
      const BlockComponent = ARTICLE_COMPONENTS[block.blockName]

      if (BlockComponent) {
        content.push(<BlockComponent key={`block-${index}`} data={block} />)
      }

      if (block.blockName === "core/paragraph") {
        paragraphCount++
        if (
          paragraphCount === 6 &&
          adIndex < adsQueries.length &&
          !adsQueries[adIndex].isLoading
        ) {
          paragraphCount = 0
          const ad = adsQueries[adIndex++].data as AdData 
          if (ad) {
            content.push(<AdBlock key={`ad-${adIndex}`} data={ad.content} />)
          }
        }
      }
    })

    return content
  }

  return (
    <div className="wordpress-content">
      <AdController group={ADS_GROUPS["articles-start"]} />
      {renderContentWithAds()}
    </div>
  )
}

interface AdData {
  content: string
}
