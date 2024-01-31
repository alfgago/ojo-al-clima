import { useQuery, useQueries } from "react-query"
import { ARTICLE_COMPONENTS } from "@/constants/articleComponents"
import { ADS_GROUPS } from "@/constants/adsGroups"
import { fetchAdsData } from "@/pages/api/ads"
import { AdBlock } from "../ads"
import { AdController } from "../ad-controller"

export const ArticleComponents = ({ blocks, adsKey, lastKey = null }: any) => {
  const { data: adsGroup } = useQuery(adsKey, () =>
    fetchAdsData(ADS_GROUPS[adsKey])
  );

  let paragraphCount = 0;
  const totalParagraphs = blocks.filter((block: any) => block.blockName === "core/paragraph").length;

  const adsQueries = useQueries(
    adsGroup?.ads?.map((adId: any): any => ({
      queryKey: ["adDetails", adId],
      queryFn: () => fetchAdsData(`ads/${adId}`),
    })) || []
  );

  const renderContentWithAds = () => {
    let content = [] as any;
    let adIndex = 0;

    blocks.forEach((block: any, index: number) => {
      const BlockComponent = ARTICLE_COMPONENTS[block.blockName];

      if (BlockComponent) {
        content.push(<BlockComponent key={`block-${index}`} data={block} />);
      }

      if (block.blockName === "core/paragraph") {
        paragraphCount++;
        // Verificar si después del actual hay al menos 5 párrafos antes de agregar un anuncio
        const paragraphsRemaining = totalParagraphs - paragraphCount;
        if (
          paragraphCount === 6 &&
          adIndex < adsQueries.length &&
          !adsQueries[adIndex].isLoading &&
          paragraphsRemaining >= 5
        ) {
          paragraphCount = 0;
          const ad = adsQueries[adIndex++].data as AdData;
          if (ad) {
            content.push(<AdBlock key={`ad-${adIndex}`} data={ad.content} type="horizontal" />);
          }
        }
      }
    });

    return content;
  };

  return (
    <div className="wordpress-content">
      {renderContentWithAds()}
      { lastKey && <AdController group={ADS_GROUPS[lastKey]} type="horizontal" />}
    </div>
  );
};

interface AdData {
  content: string;
}
