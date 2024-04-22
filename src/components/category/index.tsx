import { CategoryStyle, FeaturedCard, Heading, Pagination, PreviewCard, Recents } from "..";

export const CategoryComponents = ({
  data,
  recents,
  form = null,
  url
}: any) => {

  const { name = '', color = '', posts = [], pagination = {} } = data || {};

  return (
    <CategoryStyle>
      <Heading title={name} color={color} />
      <section className="wrapper-category">
        <div className="articles-container">

          {posts.length > 0 && (
            <div className="featured-article">
              <FeaturedCard {...posts[0]} url={url}/>
            </div>
          )}
          <div className="category-articles">
            {posts.length > 1 && posts.slice(1).map((post: any, index: number) => (
              <PreviewCard key={index} {...post} type="vertical" post={url}/>
            ))}
          </div>
          {pagination && <Pagination data={pagination} />}
        </div>
        {recents && <Recents articles={recents} form={form} />}
      </section>
    </CategoryStyle>
  )
}
