import { fetchAdsData } from "@/pages/api/ads"
import { useQuery, useQueries } from "react-query"
import { AdBlock } from "../ads"

export const AdController = ({ group }: { group: string }) => {
  const {
    data: adsGroup,
    isLoading,
    isError,
  } = useQuery<AdsGroupData>(["adsGroup", group], () =>
    fetchAdsData(group)
  )

  const adQueries = useQueries(
    adsGroup?.ads?.map((adId) => ({
      queryKey: ["adDetails", adId],
      queryFn: () => fetchAdsData(`ads/${adId}`),
    })) || []
  )

  if (isError) return null

  return (
    <div className="ads-container">
      {!isLoading &&
        adQueries.map((ad, index) =>
          ad.isLoading ? (
            <div key={index}>Loading ad...</div>
          ) : (
            <AdBlock key={ad.data?.ID} data={ad.data?.content} />
          )
        )}
    </div>
  )
}

interface AdsGroupData {
  ads: number[]
}
