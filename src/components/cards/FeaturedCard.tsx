import Image from "next/image"
import Link from "next/link"
import { CategoryLabel } from ".."
import { FeaturedStyle } from "./FeaturedStyle";


type ArticleCardProps = {
  name: string;
  slug: string;
  date: string;
  category: any;
  thumbnail: any;
  author: string;
  excerpt: string;
};

export const FeaturedCard = ({
  name,
  slug,
  category,
  thumbnail,
  author,
  excerpt
}: ArticleCardProps) => {
  return (
    <FeaturedStyle>
      <div className="featured-card">
        <div className="thumbnail-wrapper">
          <Link href={`/articles/${slug}`}>
            <Image
              src={thumbnail.url_full}
              alt={thumbnail.alt}
              width={thumbnail.width}
              height={thumbnail.height}
            />
          </Link>
        </div>
        <div className="content-wrapper">
          <div className="meta">
            
            <CategoryLabel {...category} type="circle" />

          </div>
          <div className="title">
            <h3>
              <Link href={`/articles/${slug}`}>
                {name}
              </Link>
            </h3>
          </div>
          <div className="author">
            <span>por {author}</span>
          </div>
          <div className="excerpt">
            <p>{excerpt}</p>
          </div>
        </div>
      </div>
    </FeaturedStyle>
  )
}
