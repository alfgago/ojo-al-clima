import Image from "next/image";
import Link from "next/link";
import { CategoryLabel } from ".."; // Asegúrate de que este es el import correcto
import { FeaturedStyle } from "./FeaturedStyle";

export const FeaturedCard = ({
  name = '',
  slug = '',
  category,
  thumbnail,
  author = '',
  excerpt = ''
}: ArticleCardProps) => {
  // Verificar si todas las propiedades requeridas para CategoryLabel están presentes
  const isCategoryLabelRenderable = category && category.name && category.slug && category.color;

  return (
    <FeaturedStyle>
      <div className="featured-card" data-aos="custom-fade-in" data-aos-duration="1000" data-aos-delay="300">
        {thumbnail && thumbnail.url_full && (
          <div className="thumbnail-wrapper">
            <Link href={`/articles/${slug}`}>
                <Image
                  src={thumbnail.url_full}
                  alt={thumbnail.alt || 'Thumbnail'}
                  width={thumbnail.width || 100}
                  height={thumbnail.height || 100}
                />
            </Link>
          </div>
        )}
        <div className="content-wrapper">
          <div className="meta">
            {isCategoryLabelRenderable && <CategoryLabel {...category} type="circle" />}
          </div>
          <div className="title">
            {name && (
              <h3>
                <Link href={`/articles/${slug}`}>
                  {name}
                </Link>
              </h3>
            )}
          </div>
          <div className="author">
            {author && <span>por {author}</span>}
          </div>
          <div className="excerpt">
            {excerpt && <p>{excerpt}</p>}
          </div>
        </div>
      </div>
    </FeaturedStyle>
  )
}

interface ThumbnailProps {
  url_full?: string;
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
  name?: string;
  slug?: string;
  category?: CategoryProps;
  thumbnail?: ThumbnailProps;
  author?: string;
  excerpt?: string;
}
