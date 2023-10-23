import { getIDforDiv } from "@/helpers/getIDforDiv";
import { BlockStyle } from "./BlockStyle";

const Block = ({ data }: any) => {

  const { blockName, innerHTML } = data;

  let id = "";

  if (blockName === "core/heading") {
    id = getIDforDiv(innerHTML);
  }

  return (
    <BlockStyle>
      <div
        id={id}
        className="wp-content"
        dangerouslySetInnerHTML={{
          __html: innerHTML,
        }}
      />
    </BlockStyle>
  )
}

export default Block;
