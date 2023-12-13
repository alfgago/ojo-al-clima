import { AdBlock } from "@/components/ads";
import { AdStyle } from "./AdStyle";
import { AdController } from "@/components/ad-controller";

const Ads = ({ data }: any) => {
  const { attrs = {} } = data || {};
  const {
    itemID
  } = attrs;
  
  let ads = [] ;

  // Agrega el itemID al array después de reemplazar 'ad_' con una cadena vacía, si itemID existe
  if (itemID) {
    ads.push(itemID.replace('ad_', ''));
  }
  return (
    <AdStyle>
      <AdController fixed={ads} loader="red" type="horizontal" />
    </AdStyle>
  )
}

export default Ads;
