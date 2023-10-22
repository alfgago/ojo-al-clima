import { ARTICLE_COMPONENTS } from "@/constants/articleComponents";

export const ArticleComponents = ({
  blocks
}: any) => {

  return (
      <div className="wordpress-content">
        {blocks.map((block: any, index: number) => {
          const BlockComponent = ARTICLE_COMPONENTS[block.blockName];
          if (BlockComponent) {
            return <BlockComponent key={index} data={block} />;
          }
          return null;
        })}
      </div>
  );
}
