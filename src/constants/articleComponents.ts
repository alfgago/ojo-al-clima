import Block from "@/components/article/block";
import Box from "@/components/article/box";
import ColumnsBlock from "@/components/article/columns/indext";
import DataCard from "@/components/article/data-card";
import Gallery from "@/components/article/gallery";
import ImageCard from "@/components/article/image";
import List from "@/components/article/list";
import Quote from "@/components/article/quote";
import Shortcode from "@/components/article/shortcode";


export const ARTICLE_COMPONENTS: { [key: string]: React.ComponentType<any> } = {
  "core/heading": Block,
  "core/paragraph": Block,
  "core/html": Block,
  "core/embed": Block,
  "core/image": ImageCard,
  "core/quote": Quote,
  "core/list": List,
  "core/columns": ColumnsBlock,
  "acf/image-gradient": ImageCard,
  "acf/post-gallery": Gallery,
  "core/shortcode": Shortcode,
  "acf/data-card": DataCard,
  "acf/box": Box
};
