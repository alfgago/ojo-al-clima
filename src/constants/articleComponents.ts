import Block from "@/components/article/block";
import ImageCard from "@/components/article/image";
import Quote from "@/components/article/quote";


export const ARTICLE_COMPONENTS: { [key: string]: React.ComponentType<any> } = {
  "core/heading": Block,
  "core/paragraph": Block,
  "core/image": ImageCard,
  "core/quote": Quote,
};
