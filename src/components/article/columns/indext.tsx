import Block from "../block";
import { ColumnsStyle } from "./ColumsStyle";

const ColumnsBlock = ({ data }: any) => {
  return (
    <ColumnsStyle className="columns-block">
      {data.innerBlocks.map((columnData: any, index: number) => (
        <div 
          key={index} 
          className="wp-column" 
          style={{ flexBasis: columnData.attrs.width }}
        >
          {columnData.innerBlocks.map((blockData: any, idx: number) => (
            <Block key={idx} data={blockData} />
          ))}
        </div>
      ))}
    </ColumnsStyle>
  );
}

export default ColumnsBlock;
