import ImageCard from "../image";
import { GalleryStyle } from "./GalleryStyle";
import { Carousel } from "./carousel";


interface GalleryProps {
  data: {
    attrs: {
      is_carousel?: boolean;
      images_per_row?: number;
      images_per_slide?: number;
      highlight_first?: boolean;
      images?:string[];
    };
  };
}

const Gallery = ({ data }: GalleryProps) => {
  const { attrs = {} } = data || {};
  const {
    is_carousel = false,
    images_per_row = 3,
    images_per_slide = 1,
    highlight_first = false,
    images = []
  } = attrs;

  return (
    <GalleryStyle items_per_row={images_per_row}>
      {
        !is_carousel ?
          <>
            {
              !highlight_first ?
                <div className="gallery-wrapper">
                  {
                    images.map((image, index) => (
                      <ImageCard key={index} data={image} />
                    ))
                  }
                </div> :
                <>
                  <div className="featured-image-gallery">
                    {images[0] && <ImageCard data={images[0]} />}
                  </div>
                  <div className="gallery-wrapper">
                    {
                      images.slice(1).map((image, index) => (
                        <ImageCard key={index} data={image} />
                      ))
                    }
                  </div>
                </>
            }
          </> : <Carousel images={images} per_slide={images_per_slide} />
      }
    </GalleryStyle>
  );
}

export default Gallery;
