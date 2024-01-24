import Link from "next/link";
import { CardsContentStyle } from "./CardContentStyle";
import { Card } from "./Card";

const CardsContent = ({ data }: any) => {
  const { attrs = {} } = data || {};
  const {
    thumbnail = {},
    title = '',
    description = '',
    button_title = '',
    button_url = '',
    cards = []
  } = attrs;

  return (
    <CardsContentStyle background={thumbnail.url_full || ''}>
      <div className="cards-content-container">
        <div className="colors-layer">
          <div className="wrapper">
            <div className="content">
              {title && (
                <div className="title" data-aos="fade-up">
                  <h2>{title}</h2>
                </div>
              )}
              {description && (
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: description }}
                  data-aos="custom-fade-in"
                  data-aos-delay="300"
                ></div>
              )}
              {button_title && button_url && (
                <div className="btn"> 
                  <Link href={`${button_url}`} data-aos="fade-up">
                    {button_title}
                  </Link>
                </div>
              )}
            </div>
            <div className="cards">
              {cards.map((card: any, index: number) => (
                <Card key={index} delay={index * 200} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </CardsContentStyle>
  )
}

export default CardsContent;
