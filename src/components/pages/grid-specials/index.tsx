import { FeaturedCard, PreviewCard } from "@/components";
import { GridSpecialStyle } from "./GridSpecialStyle";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { useWindowSize } from "usehooks-ts";
import Slider from "react-slick";

const GridSpecial = ({ data }: any) => {

  const { attrs } = data;

  const {
    reverse_order,
    highlight_first,
    light_background,
    title_text,
    title_asset_color,
    btn,
    posts
  } = attrs;

  const background = light_background ? 'light' : 'dark';
  const type = highlight_first ? 'highlight' : 'normal';
  const layout = posts.length > 3 ? "small" : "large";

  const { width } = useWindowSize();
  const isMobile = width < 767;

  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <GridSpecialStyle
      background={background}
      asset={title_asset_color}
      reverse={reverse_order}
    >
      <div className="grid-news-container">
        <div className="wrapper">
          <div className={`title ${type}`}>
            <h2>
              {title_text}
            </h2>
          </div>
          <div className={`articles ${type} ${layout}`}>
            {
              !highlight_first ?
                <>
                  {
                    !isMobile ?
                      <>
                        {
                          posts.map((post: any, index: number) => (
                            <PreviewCard key={index} {...post} type="vertical" post="specials" />
                          ))
                        }
                      </> :
                      <>
                        <Slider {...settings}>
                          {
                            posts.map((post: any, index: number) => {
                              return (
                                <div className="slide-image-container" key={index}>
                                  <div className="slide-image-wrapper">
                                    <PreviewCard key={index} {...post} type="vertical" post="specials" />
                                  </div>
                                </div>
                              )
                            })
                          }
                        </Slider>
                      </>
                  }
                </>
                : null
            }
          </div>
        </div>
      </div>
    </GridSpecialStyle>
  )
}

export default GridSpecial;
