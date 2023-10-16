import Image from 'next/image';
import { BannerStyles } from './BannerStyles';

export const ArticleBanner = ({
  post_title,
  thumbnail,
  primary_category,
  publish_date,
  author
}: any) => {
  return (
    <BannerStyles>
      <div className="banner-container">
        <div className="thumbnail-wrapper">
          <Image
            src={thumbnail.url_full}
            alt={thumbnail.alt}
            width={thumbnail.width}
            height={thumbnail.height}
          />
        </div>
        <div className="content-wrapper">
          <div className="data">
            <div className="meta">
              <span className="category">{primary_category}</span>
              <span className="date">{publish_date}</span>
            </div>
            <div className="title">
              <h1>{post_title}</h1>
            </div>
            <div className="author">
              por <span>{author}</span>
            </div>
          </div>
        </div>
      </div>
    </BannerStyles>
  );
}
