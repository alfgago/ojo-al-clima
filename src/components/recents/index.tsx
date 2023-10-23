import { PreviewCard } from ".."
import { RecentStyle } from "./RecentStyles"
import { SearchBlock } from "./search-block";


export const Recents = ({
  articles,
  limit = null
}: any) => {

  const displayedArticles = limit ? articles.slice(0, limit) : articles;

  return (
    <RecentStyle>
      <div className="recents-news-wrapper">
        <h3>
          Recientes
        </h3>
        <div className="articles-container">
          {
            displayedArticles.map((article: any, index: number) => (
              <PreviewCard
                key={index}
                {...article}
                type="lateral"
              />
            ))
          }
        </div>
        { 
          !limit && (
            <SearchBlock/>
          )
        }
      </div>
    </RecentStyle>
  )
}

