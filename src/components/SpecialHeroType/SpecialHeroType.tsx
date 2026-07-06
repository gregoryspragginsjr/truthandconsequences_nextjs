import { useRef } from "react";
import HeroType from '@/components/HeroType/HeroType';

export default function SpecialHeroType() {
  const target = useRef<HTMLDivElement>(null);

  return (
    <>
      <HeroType
        className="hero-type--faux"
        special={true}
        heading={`Truth & Consequences is an <a>advertising</a> & <a>branding</a> & <a>digital</a> & <a>production</a> & <a>other stuff</a> agency.`}
        stickers={[
          {
            src: '/images/hero-home_sticker1.png',
            alt: 'test alt',
          },
          {
            src: '/images/hero-home_sticker2.png',
            alt: 'test alt',
          },
          {
            src: '/images/hero-home_sticker3.png',
            alt: 'test alt',
          },
          {
            src: '/images/hero-home_sticker4.png',
            alt: 'test alt',
          },
          {
            src: '/images/hero-home_sticker5.png',
            alt: 'test alt',
          },
        ]}
      />
      <div
        className="special-hero-type"
        ref={target}
      >
        <div className="special-hero-type__rail">
          <HeroType
            special={true}
            heading={`Truth & Consequences is an <a>advertising</a> & <a>branding</a> & <a>digital</a> & <a>production</a> & <a>other stuff</a> agency.`}
            stickers={[
              {
                src: '/images/hero-home_sticker1.png',
                alt: 'test alt',
              },
              {
                src: '/images/hero-home_sticker2.png',
                alt: 'test alt',
              },
              {
                src: '/images/hero-home_sticker3.png',
                alt: 'test alt',
              },
              {
                src: '/images/hero-home_sticker4.png',
                alt: 'test alt',
              },
              {
                src: '/images/hero-home_sticker5.png',
                alt: 'test alt',
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}