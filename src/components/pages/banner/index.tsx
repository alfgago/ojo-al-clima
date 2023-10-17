import Link from "next/link";
import { BannerStyles } from "./BannerStyle";

const PageBanner = ({ data }: any) => {

  const { attrs } = data;
  const { posts } = attrs;
  const banner = posts[0];

  return (
    <BannerStyles>
      <div className="banner-wrapper">
        <div className="content" style={{ background: `url(${banner.thumbnail.url_full})` }}>
          <div className="data-container">
            <div className="data-wrapper">
              <h1>{banner.name}</h1>
              <p>{banner.excerpt}</p>
              <Link href={`/articles/${banner.slug}`}>
                Leer más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BannerStyles>
  )
}

export default PageBanner;
