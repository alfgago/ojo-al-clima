import Image from "next/image"
import Link from "next/link"
import { CategoryLabel } from ".."
import { PreviewStyle } from "./PreviewStyle"

type ArticleCardProps = {
  name: string;
  slug: string;
  date: string;
  category: any;  
  thumbnail: any; 
  author: string;
  type: "lateral" | "vertical"; 
};

export const PreviewCard = ({
  name,
  slug,
  date,
  category,
  thumbnail,
  author,
  type
}: ArticleCardProps) => {
  return (
    <PreviewStyle color={category.color}>
      <div className={`article-card ${type}`}>
        <div className="thumbnail">
          <Image
            src={thumbnail.url_medium}
            alt={thumbnail.alt}
            width={thumbnail.width}
            height={thumbnail.height}
          />
        </div>
        <div className="content">
          <div className="meta">
            <CategoryLabel {...category} />
            <span className="date">
              {date}
            </span>
          </div>
          <div className="title">
            <h4>
              <Link href={`/articles/${slug}`}>
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
