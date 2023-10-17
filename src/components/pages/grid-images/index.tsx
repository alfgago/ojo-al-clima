import Link from "next/link";
import { GridImageStyle } from "./GridStyle";
import { ReactSVG } from 'react-svg';
import Image from "next/image";


const GridImages = ({ data }: any) => {

  const { attrs } = data;
  const { title, btn_label, btn_url, images, items_per_row, dark_background } = attrs;

  return (
    <GridImageStyle items={items_per_row} background={dark_background}>
      <div className="grid-images-wrapper">
        <div className="heading">
          <div className="title">
            <h3>
              {title}
            </h3>
          </div>
          <div className="btn">
            <Link href={`/${btn_url}`}>
              {btn_label} <ReactSVG src="/icons/arrow-next.svg" />
            </Link>
          </div>
        </div>
        <div className="content">
          {
            images?.map((image: any, index: number) => (
              <div key={index} className="item">
                  <Image 
                    src={image.url_full} 
                    alt={image.title} 
                    width={image.width}
                    height={image.height}
                  />
              </div>
            ))
          }
        </div>
      </div>
    </GridImageStyle>
  )
}

export default GridImages;
