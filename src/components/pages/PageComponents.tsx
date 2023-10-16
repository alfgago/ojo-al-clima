import { PAGE_COMPONENTS } from "@/constants/pageComponents";

export const PageComponents = ({
  blocks
}: any) => {

  const blocksArray = Object.values(blocks);

  return (
    blocksArray.map((block: any, index) => {
      const BlockComponent = PAGE_COMPONENTS[block.blockName];

      if (BlockComponent) {
        return <BlockComponent key={index} data={block} />;
      }
      return null;
    })
  );
}
