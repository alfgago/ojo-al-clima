import Image from 'next/image';
import { ArticleComponents } from '..';
import { LearnPageStyle } from './LearnPageStyle';

export const LearnPage = ({ data }: any) => {

  const { index = 0, color = 'red', blocks = [], thumbnail = {} } = data || {};

  return (
    <LearnPageStyle color={color} index={index}>
      {thumbnail.url_full && (
        <section className="banner-gradient">
          <div className="banner-gradient-inner">
            <Image
              src={thumbnail.url_full}
              alt={thumbnail.alt || 'Thumbnail'}
              width={thumbnail.width || 100}
              height={thumbnail.height || 100}
              layout="responsive"
            />
          </div>
        </section>
      )}
      <section className="learn-content">
        <div className="wrapper">
          <ArticleComponents blocks={blocks} adsKey="learn-content" lastKey="learn-end"/>
        </div>
      </section>
    </LearnPageStyle>
  );
}
