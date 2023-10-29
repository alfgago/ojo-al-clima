import { SPECIALS_COMPONENTS } from "@/constants/specialsComponents";

export const SpecialsComponents = ({
  blocks
}: any) => {

  return (
    <div className="wordpress-content">
      {blocks.map((block: any, index: number) => {
        const BlockComponent = SPECIALS_COMPONENTS[block.blockName];
        if (BlockComponent) {
          return <BlockComponent key={index} data={block} />;
        }
        return null;
      })}
    </div>
  );
}
