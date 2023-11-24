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
                <div className="title">
                  <h2>{title}</h2>
                </div>
              )}
              {description && (
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: description }}
                ></div>
              )}
              {button_title && button_url && (
                <div className="btn"> 
                  <Link href={`${button_url}`}>
                    {button_title}
                  </Link>
                </div>
              )}
            </div>
            <div className="cards">
              {cards.map((card: any, index: number) => (
                <Card key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </CardsContentStyle>
  )
}

export default CardsContent;
