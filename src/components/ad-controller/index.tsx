import { fetchAdsData } from "@/pages/api/ads";
import { useQuery, useQueries } from "react-query";
import { AdBlock } from "../ads";
import { Loader } from "..";

export const AdController = ({
  group = null,
  fixed = null,
  type,
  loader = 'white',
}: {
  group?: string | null;
  fixed?: number[] | null;
  type: 'horizontal' | 'full';
  loader?: string | 'white';
}) => {

  // Usar 'useQuery' solo si 'group' no es nulo
  const { data: adsGroup, isLoading: isGroupLoading, isError } = useQuery<AdsGroupData>(
    ["adsGroup", group],
    // Aquí se asegura que 'group' no sea null antes de llamar a fetchAdsData
    () => group ? fetchAdsData(group) : Promise.reject('No group provided'),
    { enabled: !!group }
  );

  // Consultar los detalles de los anuncios basándonos en 'fixed' o los datos del grupo
  const adQueries = useQueries(
    (fixed ? fixed : adsGroup?.ads || []).map(adId => ({
      queryKey: ["adDetails", adId],
      queryFn: () => fetchAdsData(`ads/${adId}`),
    }))
  );

  if (isError) return null;

  // Muestra el Loader si está cargando los grupos o los detalles de los anuncios
  const isLoading = fixed ? adQueries.some(query => query.isLoading) : isGroupLoading;
  if (isLoading) return <Loader color={loader} />;

  return (
    <div className="ads-container">
      {!isLoading &&
        adQueries.map((ad, index) =>
          ad.isLoading ? (
            <div key={index}>
              <Loader color={loader}  />
            </div>
          ) : (
            <AdBlock key={ad.data?.ID} data={ad.data?.content} type={type} />
          )
        )}
    </div>
  );
};

interface AdsGroupData {
  ads: number[];
}
