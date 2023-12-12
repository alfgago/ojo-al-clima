import Link from "next/link"
import { BannerStyles } from "./BannerStyle"
import { learn } from "@/constants/learnItems"
import { ReactSVG } from "react-svg"
import { AdController } from "@/components/ad-controller"
import { ADS_GROUPS } from "@/constants/adsGroups"

const PageBanner = ({ data }: any) => {
  const { attrs = {} } = data || {}
  const { posts = [] } = attrs
  const banner = posts.length > 0 ? posts[0] : null

  return (
    <BannerStyles>
      {banner && (
        <div className="banner-wrapper">
          <div
            className="content"
            style={{ background: `url(${banner.thumbnail?.url_full})` }}
          >
            <div className="data-container">
              <div className="data-wrapper">
                <h1>
                  {banner.slug && (
                    <Link href={`/articles/${banner.slug}`}>{banner.name}</Link>
                  )}
                </h1>
                <p>{banner.excerpt}</p>
                {banner.slug && (
                  <Link className="btn" href={`/articles/${banner.slug}`}>
                    Leer más
                  </Link>
                )}
                <AdController group={ADS_GROUPS["home-banner"]} type='horizontal'/>
              </div>
            </div>
          </div>
          <div className="learn-colors">
            {learn?.map((item: any, index: number) => (
              <div key={index} className={`${item.color}`}>
                <Link href={`/${item.post_name}`}>
                  <span>{item.post_title}</span>
                  <ReactSVG src="/icons/plus.svg" className="plus-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </BannerStyles>
  )
}

export default PageBanner
