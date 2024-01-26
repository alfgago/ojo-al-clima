import { PreviewCard } from "@/components";
import { GridSpecialsStyle } from "./GridStyle";

const GridSpecials = ({ data }: any) => {

  const { attrs } = data;
  const { posts } = attrs;

  return (
    <GridSpecialsStyle>
      <div className="grid-specials-container">
        <div className="wrapper">
          <div className='articles'>
            {
              posts.map((post: any, index: number) => (
                <PreviewCard key={index} delay={index * 200} {...post} type="vertical" />
              ))
            }
          </div>
        </div>
      </div>
    </GridSpecialsStyle>
  )
}

export default GridSpecials;
