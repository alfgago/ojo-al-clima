import { CategoryStyle, FeaturedCard, Heading, Pagination, PreviewCard, Recents } from "..";

export const CategoryComponents = ({
  data,
  recents,
}: any) => {

  const { name, color, posts, pagination } = data;

  return (
    <CategoryStyle>
      <Heading title={name} color={color} />
      <section className="wrapper-category">
        <div className="articles-container">
          <div className="featured-article">
            <FeaturedCard {...posts[0]} />
          </div>
          <div className="category-articles">
            {posts.slice(1).map((post: any, index: number) => (
              <PreviewCard key={index} {...post} type="vertical" />
            ))}
          </div>
          <Pagination data={pagination} />
        </div>
        <Recents articles={recents} />
      </section>
    </CategoryStyle>
  )
}
