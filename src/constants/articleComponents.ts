import Block from "@/components/article/block";
import ColumnsBlock from "@/components/article/columns/indext";
import ImageCard from "@/components/article/image";
import List from "@/components/article/list";
import Quote from "@/components/article/quote";


export const ARTICLE_COMPONENTS: { [key: string]: React.ComponentType<any> } = {
  "core/heading": Block,
  "core/paragraph": Block,
  "core/image": ImageCard,
  "core/quote": Quote,
  "core/list": List,
  "core/columns": ColumnsBlock,
  "acf/image-gradient": ImageCard,
};
