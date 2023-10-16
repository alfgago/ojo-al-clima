import { ARTICLE_COMPONENTS } from "@/constants/articleComponents";

export const ArticleComponents = ({
  blocks
}: any) => {

  const blocksArray = Object.values(blocks);

  return (
      <div className="wordpress-content">
        {blocksArray.map((block: any, index) => {

          const BlockComponent = ARTICLE_COMPONENTS[block.blockName];

          if (BlockComponent) {
            return <BlockComponent key={index} data={block} />;
          }
          return null;
        })}
      </div>
  );
}
