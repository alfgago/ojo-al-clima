import Image from "next/image";
import { ImageStyle } from "./ImageStyles";

const ImageCard = ({ data }: any) => {

  const { attrs } = data;
  const hasImageGradientClass = attrs.className.includes('image-gradient');

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
          {attrs.caption && <span className="caption">{attrs.caption}</span>}
          {attrs.author && <span className="author">(Créditos: {attrs.author})</span>}
          {attrs.author && hasImageGradientClass && (
            <span className="credits-image-gradient">{attrs.author}</span>
          )}
        </figcaption>
      )}
    </ImageStyle>
  )
}

export default ImageCard;
