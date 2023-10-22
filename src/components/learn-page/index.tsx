import Image from 'next/image';
import { ArticleComponents } from '..';
import { LearnPageStyle } from './LearnPageStyle';

export const LearnPage = ({ data }: any) => {

  const { index, color, blocks, thumbnail } = data;

  return (
    <LearnPageStyle color={color} index={index}>
      <section className="banner-gradient">
        <div className="banner-gradient-inner">
          <Image
            src={thumbnail.url_full}
            alt={thumbnail.alt}
            width={thumbnail.width}
            height={thumbnail.height}
            layout="responsive"
          />
        </div>
      </section>
      <section className="learn-content">
        <div className="wrapper">
          <ArticleComponents blocks={blocks} />
        </div>
      </section>
    </LearnPageStyle>
  );
}
