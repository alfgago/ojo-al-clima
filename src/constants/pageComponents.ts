import PageBanner from "@/components/pages/banner";
import CardsContent from "@/components/pages/cards-content";
import GridImages from "@/components/pages/grid-images";
import GridNews from "@/components/pages/grid-news";
import GridSpecial from "@/components/pages/grid-specials";

export const PAGE_COMPONENTS: { [key: string]: React.ComponentType<any> } = {
  "acf/home-banner": PageBanner,
  "acf/grid-news": GridNews,
  "acf/grid-specials": GridSpecial,
  "acf/grid-images": GridImages,
  "acf/card-content": CardsContent,
};
