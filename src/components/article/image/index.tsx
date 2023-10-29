import Image from "next/image";
import { ImageStyle } from "./ImageStyles";

const ImageCard = ({ data }: any) => {

  const { attrs } = data;

  return (
    <ImageStyle className={attrs.className + ' image-block'}>
      <div className="img-wrapper">
        <Image
          src={attrs.url_full}
          alt={attrs.alt}
          width={attrs.width}
          height={attrs.height}
        />
      </div>
      {(attrs.caption || attrs.author) && (
        <figcaption>
          {attrs.caption && <span>{attrs.caption}</span>}
          {attrs.author && <span>(Créditos: {attrs.author})</span>}
        </figcaption>
      )}
    </ImageStyle>
  )
}

export default ImageCard;
