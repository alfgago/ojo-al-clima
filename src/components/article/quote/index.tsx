import Image from "next/image";
import { QuoteStyle } from "./QuoteStyle";
import { ReactSVG } from "react-svg";

interface ParagraphBlock {
  innerHTML: string;
}

const Quote = ({ data }: any) => {

  const { innerBlocks } = data;

  return (
    <QuoteStyle>
      <span className="top">
        <ReactSVG src="/icons/quote-top.svg" />
      </span>
      <div className="content-wrapper">
        {
          innerBlocks.map((paragraph: ParagraphBlock, index: number) => {
            return (
              <div key={index} dangerouslySetInnerHTML={{ __html: paragraph.innerHTML }}></div>
            );
          })
        }
      </div>
      <span className="down">
        <ReactSVG src="/icons/quote-down.svg" />
      </span>
    </QuoteStyle>
  )
}

export default Quote;
