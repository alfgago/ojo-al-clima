import Image from "next/image";
import { DataCardStyle } from "./DataCardStyle";


const DataCard = ({ data }: DataCardProps) => {
  const { attrs = {} } = data || {};
  const {
    image = {},
    value = '',
    suffix = '',
    title = '',
    description = ''
  } = attrs;

  return (
    <DataCardStyle>
      <div className="data-card-wrapper">
        {image.url_full && ( 
          <div className="image">
            <Image
              src={image.url_full}
              alt="data-card-image"
              width={image.width || 100} 
              height={image.height || 100} 
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
        )}
        <div className="content">
          <div className="title">
            <h5>
              {title}
            </h5>
          </div>
          {description && (
            <div
              className="description"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          )}
        </div>
      </div>
    </DataCardStyle>
  );
}

export default DataCard;

interface ImageProps {
  url_full?: string;
  width?: number;
  height?: number;
}

interface DataCardProps {
  data: {
    attrs: {
      image?: ImageProps;
      value?: string;
      suffix?: string;
      title?: string;
      description?: string;
    };
  };
}