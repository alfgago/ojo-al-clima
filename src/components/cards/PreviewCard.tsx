import Image from "next/image";
import Link from "next/link";
import { CategoryLabel } from "..";
import { PreviewStyle } from "./PreviewStyle";


export const PreviewCard = ({
  name,
  slug,
  date,
  category,
  thumbnail,
  author,
  type,
  post = "articles" 
}: ArticleCardProps) => {

  const color = category?.color || 'gray'; 

  return (
    <PreviewStyle color={color}>
      <div className={`article-card ${type}`}>
        {thumbnail && thumbnail.url_medium && (
          <div className="thumbnail">
            <Link href={`/${post}/${slug}`}>
                <Image
                  src={thumbnail.url_medium}
                  alt={thumbnail.alt || 'Thumbnail'}
                  width={thumbnail.width || 100}
                  height={thumbnail.height || 100}
                />
            </Link>
          </div>
        )}
        <div className="content">
          <div className="meta">
            {category && <CategoryLabel {...category} />}
            <span className="date">
              {date}
            </span>
          </div>
          <div className="title">
            <h4>
              <Link href={`/${post}/${slug}`}>
                {name}
              </Link>
            </h4>
          </div>
          <div className="author">
            <span>
              por {author}
            </span>
          </div>
        </div>
      </div>
    </PreviewStyle>
  )
}


interface ThumbnailProps {
  url_medium?: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface CategoryProps {
  name?: string;
  slug?: string;
  color?: string;
  type?: "normal" | "circle";
}

interface ArticleCardProps {
  name: string;
  slug: string;
  date: string;
  category: CategoryProps;
  thumbnail: ThumbnailProps;
  author: string;
  type: "lateral" | "vertical";
  post?: "articles" | "specials";
}