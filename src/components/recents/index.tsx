import { PreviewCard } from ".."
import { RecentStyle } from "./RecentStyles"
 

export const Recents = ({
  articles
}: any) => {
  return (
    <RecentStyle>
      <div className="recents-news-wrapper">
        <h3>
          Recientes
        </h3>
        <div className="articles-container">
          {
            articles.map((article: any, index: number) => (
              <PreviewCard 
                key={index} 
                {...article} 
                type="lateral"
              />
            ))
          }
        </div>
      </div>
    </RecentStyle>
  )
}
