import { FeaturedCard, Heading, Pagination, PreviewCard, Recents } from "..";
import { SearchComponentsStyle } from "./SearchStye"
import { SearchBar } from "./bar";

export const SearchComponets = ({ data, recents }: any) => {

  const title = 'Busqueda';
  const color = 'blue';

  const { is_results, posts, pagination } = data;

  return (
    <SearchComponentsStyle>
      <Heading title={title} color={color} />
      <SearchBar/>
      <section className="posts-wrapper">
        <div className="featured-article">
          {is_results ? (
            <FeaturedCard {...posts[0]} />
          ) : (
            <h2>
              Sin resultados.
            </h2>
          )}
        </div>
        <div className="others-articles">
          {is_results && posts.slice(1).map((post: any, index: number) => (
            <PreviewCard key={index} {...post} type="vertical" />
          ))}
        </div>
        {is_results && (
          <div className="pagination-wrapper">
            <Pagination data={pagination} />
          </div>
        )}
        <div className="recents-items">
          <Recents articles={recents} limit={3} />
        </div>
      </section>
    </SearchComponentsStyle>
  );
}
