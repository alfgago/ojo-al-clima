import { FeaturedCard, PreviewCard } from "@/components";
import { GridNewStyle } from "./GridStyle";
import Link from "next/link";
import { ReactSVG } from "react-svg";
import { useWindowSize } from "usehooks-ts";
import Slider from "react-slick";

const GridNews = ({ data }: any) => {

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
    <GridNewStyle
      background={background}
      asset={title_asset_color}
      reverse={reverse_order}
    >
      <div className="grid-news-container">
        <div className="wrapper">
          <div className={`title ${type}`} data-aos="fade-right">
            <h2>
              {title_text}
            </h2>
            {
              !highlight_first && btn?.text && btn?.after_title && (
                <div className="btn-show-more-top-wrapper">
                  <Link href={btn.url}>
                    {btn.text}
                    <ReactSVG
                      src="/icons/arrow-next.svg"
                    />
                  </Link>
                </div>
              )
            }
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
                            <PreviewCard key={index} delay={index * 200} {...post} type="vertical"/>
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
                                    <PreviewCard key={index} {...post} type="vertical" />
                                  </div>
                                </div>
                              )
                            })
                          }
                        </Slider>
                      </>
                  }
                </>
                :
                <>
                  <div className="lateral-wrapper">
                    {
                      posts.slice(1).map((post: any, index: number) => (
                        <PreviewCard key={index} {...post} type="lateral" />
                      ))
                    }
                  </div>
                  <div className="featured-wrapper">
                    <FeaturedCard {...posts[0]} />
                  </div>
                </>
            }
          </div>
          {
            !highlight_first && btn?.text && !btn?.after_title && (
              <div className="btn-show-more-bottom-wrapper">
                <Link href={btn.url} data-aos="fade-up" data-aos-delay="300">
                  {btn.text}
                </Link>
              </div>
            )
          }
        </div>
      </div>
    </GridNewStyle>
  )
}

export default GridNews;
