import { useRef } from 'react';
import PictureLoader from '../PictureLoader';

interface CollageProps {
  images: string[] | number[];
  paragraphs?: string;
  caption?: string;
}

export default function Collage({ images, paragraphs, caption }: CollageProps) {
  const target = useRef<HTMLDivElement>(null);

  return (
    <div className="collage" ref={target}>
      <div className="collage__inner grid">
        <div className="collage__main">
          {images.map((image, i) => (
            <PictureLoader
              key={i}
              classes="collage__image br-image"
              id={image}
              size={'collage'}
            />
          ))}
        </div>
        { paragraphs && <div
          className="collage__secondary collage__caption paragraph-style-3"
          dangerouslySetInnerHTML={{ __html: paragraphs }}
        /> }
      </div>
    </div>
  );
}