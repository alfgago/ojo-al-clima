import Image from "next/image";
import { ImageStyle } from "./ImageStyles";
import PropTypes from 'prop-types'; // Si decides usar PropTypes

const ImageCard = ({ data }: any) => {
  const { attrs = {} } = data || {};
  const { 
    className = '', 
    url_full = '', 
    alt = '', 
    width = 100, 
    height = 100, 
    caption = '',
    author = ''
  } = attrs;

  const hasImageGradientClass = className.includes('image-gradient');

  return (
    <ImageStyle className={`${className} image-block`}>
      <div className="img-wrapper">
        <Image
          src={url_full}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
      {(caption || author) && (
        <figcaption>
          {caption && <span className="caption">{caption}</span>}
          {author && <span className="author">(Créditos: {author})</span>}
          {author && hasImageGradientClass && (
            <span className="credits-image-gradient">{author}</span>
          )}
        </figcaption>
      )}
    </ImageStyle>
  )
}

ImageCard.propTypes = {
  data: PropTypes.shape({
    attrs: PropTypes.shape({
      className: PropTypes.string,
      url_full: PropTypes.string,
      alt: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      caption: PropTypes.string,
      author: PropTypes.string,
    }),
  }),
};

export default ImageCard;
