import Image from 'next/image';
import { BannerStyles } from './BannerStyles';
import { CategoryLabel } from '@/components';

export const ArticleBanner = ({
  post_title,
  thumbnail,
  category,
  publish_date,
  author
}: any) => {

  const { caption } = thumbnail;

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
              <CategoryLabel {...category} type='circle' />
              <span className="date">{publish_date}</span>
            </div>
            <div className="title">
              <h1>{post_title}</h1>
            </div>
            {author && (
              <div className="author">
                por <span>{author}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="banner-caption">
        <p>{caption}</p>
      </div>
    </BannerStyles>
  );
}
