import Link from "next/link";
import { GridImageStyle } from "./GridStyle";
import { ReactSVG } from 'react-svg';
import Image from "next/image";

const GridImages = ({ data }: any) => {
  const { attrs = {} } = data || {};
  const { 
    title = '', 
    btn_label = '', 
    btn_url = '', 
    images = [], 
    items_per_row = 5,
    dark_background = true, 
  } = attrs;

  return (
    <GridImageStyle items={items_per_row} background={dark_background}>
      <div className="grid-images-wrapper">
        <div className="heading">
          {title && (
            <div className="title">
              <h3>{title}</h3>
            </div>
          )}
          {btn_label && btn_url && (
            <div className="btn">
              <Link href={`${btn_url}`}>
                {btn_label} <ReactSVG src="/icons/arrow-next.svg" />
              </Link>
            </div>
          )}
        </div>
        <div className="content">
          {
            images.map((image: any, index: number) => (
              <div key={index} className="item">
                {image.url_full && (
                  <Image 
                    src={image.url_full} 
                    alt={image.alt || 'Image'} 
                    width={image.width || 100}
                    height={image.height || 100}
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                  />
                )}
              </div>
            ))
          }
        </div>
      </div>
    </GridImageStyle>
  )
}

export default GridImages;
