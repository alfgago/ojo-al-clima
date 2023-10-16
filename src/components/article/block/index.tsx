import { BlockStyle } from "./BlockStyle";

const Block = ({ data }: any) => {
  return (
    <BlockStyle>
      <div
        className="wp-content"
        dangerouslySetInnerHTML={{
          __html: data.innerHTML,
        }}
      />
    </BlockStyle>
  )
}

export default Block;
