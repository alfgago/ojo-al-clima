import PageBanner from "@/components/pages/banner";
import GridImages from "@/components/pages/grid-images";
import GridNews from "@/components/pages/grid-news";

export const PAGE_COMPONENTS: { [key: string]: React.ComponentType<any> } = {
  //"acf/home-banner": PageBanner,
  "acf/grid-news": GridNews,
  "acf/grid-images": GridImages
};
