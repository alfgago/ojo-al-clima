import { ADS_GROUPS } from "@/constants/adsGroups"
import { Newsletter, PreviewCard } from ".."
import { AdController } from "../ad-controller"
import { RecentStyle } from "./RecentStyles"
import { SearchBlock } from "./search-block"

export const Recents = ({ articles, limit = null, form = null }: any) => {
  const displayedArticles = limit ? articles.slice(0, limit) : articles

  return (
    <RecentStyle className="recents-block">
      <div className="recents-news-wrapper">
        <h3>Recientes</h3>
        <div className="articles-container">
          {displayedArticles.map((article: any, index: number) => (
            <PreviewCard key={index} {...article} type="lateral" />
          ))}
        </div>
        {!limit && (
          <>
            <SearchBlock />
            
            <AdController group={ ADS_GROUPS["articles-lateral"] } type="full"/>
        
            { form && <Newsletter form={form}/> }
          </>
        )}
      </div>
    </RecentStyle>
  )
}
