import { useRef } from 'react';
import PictureLoader from '../PictureLoader';

interface Item {
  image: number;
  heading: string;
  subheading: string;
  url: string;
  loop: number;
}

interface ArticleGridProps {
  variant: string;
  items: Item[];
}

export default function ArticleGrid({ variant = 'default', items }: ArticleGridProps) {
  const target = useRef<HTMLDivElement>(null);

  return (
    <div className={`article-grid article-grid--${variant}`} ref={target}>
      <div className={`article-grid__inner grid ${ variant != 'masonry' ? 'grid' : '' }`}>
        { variant == 'masonry' ?
          <>
          <div className="article-grid__sizer" />
          {items.map((item, i) =>
            <button key={i} className="article-grid__item">
              <PictureLoader
                classes="br-image br-image--link"
                id={item.image}
              />
            </button>
          )}
          </>
        : <div className="article-grid__item">
          
          </div>}
      </div>
    </div>
  )
}