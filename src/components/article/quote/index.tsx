import Image from "next/image";
import { QuoteStyle } from "./QuoteStyle";

interface ParagraphBlock {
  innerHTML: string;
}

const Quote = ({ data }: any) => {

  const { innerBlocks } = data;

  return (
    <QuoteStyle>
      <div className="content-wrapper">
        {
          innerBlocks.map((paragraph: ParagraphBlock, index: number) => {
            return (
              <div key={index} dangerouslySetInnerHTML={{ __html: paragraph.innerHTML }}></div>
            );
          })
        }
      </div>
    </QuoteStyle>
  )
}

export default Quote;
