import Slider from "react-slick";
import ImageCard from "../../image";
import { CarouselStyle } from "./CarouselStyle";

export const Carousel = ({
  images,
  per_slide,
}: any) => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: per_slide,
    slidesToScroll: per_slide,
    responsive: [
      {
        breakpoint: 768,  
        settings: {
          slidesToShow: 1,  
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <CarouselStyle className="image-carousel">
      <Slider {...settings}>
        {
          images.map((image: any, index: number) => {
            return (
              <div className="slide-image-container" key={index}>
                <div className="slide-image-wrapper">
                  <ImageCard data={image} />
                </div>
              </div>
            )
          })
        }
      </Slider>
    </CarouselStyle>
  );
}
