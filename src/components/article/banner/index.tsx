import Image from 'next/image';
import { BannerStyles } from './BannerStyles';
import { CategoryLabel } from '@/components'; 

export const ArticleBanner = ({
  post_title = '',
  secondary_title = '',
  thumbnail = {},
  category,
  publish_date = '',
  author = ''
}: ArticleBannerProps) => {
  
  const {
    url_full = '', 
    alt = '', 
    width = 100, 
    height = 100,
    caption = ''
  } = thumbnail;

  return (
    <BannerStyles>
      <div className="banner-container">
        <div className="thumbnail-wrapper">
          <Image
            src={url_full}
            alt={alt}
            width={width}
            height={height}
          />
        </div>
        <div className="content-wrapper">
          <div className="data">
            <div className="meta">
              {category && <CategoryLabel {...category} type='circle'/>}
              <span className="date">{publish_date}</span>
            </div>
            {secondary_title && (
              <div className="secondary-title">
                <span>{secondary_title}</span>
              </div>
            )}
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
      {caption && (
        <div className="banner-caption">
          <p>{caption}</p>
        </div>
      )}
    </BannerStyles>
  );
}

interface ThumbnailProps {
  url_full?: string;
  alt?: string;
  width?: number;
  height?: number;
  caption?: string;
}

interface CategoryProps {
  name: string;
  slug: string;
  color: string;
  type?: "normal" | "circle";
}

interface ArticleBannerProps {
  post_title?: string;
  secondary_title?: string;
  thumbnail?: ThumbnailProps;
  category?: CategoryProps;
  publish_date?: string;
  author?: string;
}