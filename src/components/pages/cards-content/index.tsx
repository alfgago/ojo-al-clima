import Link from "next/link";
import { CardsContentStyle } from "./CardContentStyle";
import { Card } from "./Card";

const CardsContent = ({ data }: any) => {

  const { attrs } = data;

  const {
    thumbnail,
    title,
    description,
    button_title,
    button_url,
    cards
  } = attrs;

  return (
    <CardsContentStyle>
      <div className="cards-content-container" style={{ background: `url(${thumbnail.url_full}), lightgray 50% / cover no-repeat;` }}>
        <div className="colors-layer" style={{ background: `url(/layers/colors.webp), lightgray 50% / cover no-repeat;` }}>
          <div className="wrapper">
            <div className="content">
              <div className="title">
                <h2>
                  {title}
                </h2>
              </div>
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: description }}
              ></div>
              <div className="btn">
                <Link href={`/${button_url}`}>
                  {button_title}
                </Link>
              </div>
            </div>
            <div className="cards">
              {cards.map((card: any, index: number) => {
                return (
                  <Card key={index} {...card} />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </CardsContentStyle>
  )
}

export default CardsContent;
