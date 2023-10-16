import Image from "next/image";
import { ImageStyle } from "./ImageStyles";

const ImageCard = ({ data }: any) => {

  const { attrs } = data;

  return (
    <ImageStyle>
      <div className="img-wrapper">
        <Image
          src={attrs.url_full}
          alt={attrs.alt}
          width={attrs.width}
          height={attrs.height}
        />
      </div>
      <figcaption>
        <span>
          {attrs.caption}
        </span>
      </figcaption>
    </ImageStyle>
  )
}

export default ImageCard;
