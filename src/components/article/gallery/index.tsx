import ImageCard from "../image";
import { GalleryStyle } from "./GalleryStyle";
import { Carousel } from "./carousel";


const Gallery = ({ data }: any) => {

  const { attrs } = data;
  const {
    is_carousel,
    images_per_row,
    images_per_slide,
    highlight_first,
    images
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
                    images?.map((image: any, index: number) => {
                      return (
                        <ImageCard key={index} data={image} />
                      )
                    })
                  }
                </div> :
                <>
                  <div className="featured-image-gallery">
                    <ImageCard data={images[0]} />
                  </div>
                  <div className="gallery-wrapper">
                    {
                      images.slice(1).map((image: any, index: number) => {
                        return (
                          <ImageCard key={index} data={image} />
                        )
                      })
                    }
                  </div>
                </>
            }
          </> : <Carousel images={images} per_slide={images_per_slide} />
      }
    </GalleryStyle>
  )
}

export default Gallery;
