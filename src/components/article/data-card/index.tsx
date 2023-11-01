import Image from "next/image";
import { DataCardStyle } from "./DataCardStyle";


const DataCard = ({ data }: any) => {

  const { attrs } = data;
  const {
    image,
    value,
    suffix,
    title,
    description
  } = attrs;

  return (
    <DataCardStyle>
      <div className="data-card-wrapper">
        <div className="image">
          <Image
            src={image.url_full}
            alt="data-card-image"
            width={image.width}
            height={image.height}
          />
          <div className="data">
            <div className="value">
              {value}
              <span
                className="suffix"
                dangerouslySetInnerHTML={{
                  __html: suffix,
                }} 
              />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="title">
            <h5>
              {title}
            </h5>
          </div>
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>
      </div>
    </DataCardStyle>
  )
}

export default DataCard;
