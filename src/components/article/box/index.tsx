import { BoxStyle } from "./BoxStyle";

const Box = ({ data }: any) => {

  const { attrs } = data;

  return (
    <BoxStyle>
      <div
        className="wp-content box"
        dangerouslySetInnerHTML={{
          __html: attrs.content,
        }}
      />
    </BoxStyle>
  )
}

export default Box;
