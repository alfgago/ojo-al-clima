import { ArticleComponents } from "@/components";
import { LearnStyle } from "./LearnStyle"
import Image from "next/image";


export const Learn = ({ data, index, active }: any) => {

  const { color, blocks, thumbnail } = data;

  return (
    <LearnStyle color={color} index={index}>
      <section 
        className="learn-item-container"
        style={{ 
          opacity: (active == index) ? 1 : 0, 
          pointerEvents: (active == index) ? 'all' : 'none' 
        }}  
      >
        <div className="learn-item-wrapper">
          {/* <div className="banner-gradient">
            <div className="banner-gradient-inner">
              <Image 
                src={thumbnail.url_full}
                alt={thumbnail.alt}
                width={thumbnail.width}
                height={thumbnail.height}
                layout="responsive"
              />
            </div>
          </div> */}
          {/* <ArticleComponents blocks={blocks} /> */}
        </div>
      </section>
    </LearnStyle>
  )
}
