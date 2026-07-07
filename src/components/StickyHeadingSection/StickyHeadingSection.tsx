"use client"

import { useRef } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import SpecialHeroType from '@/components/SpecialHeroType/SpecialHeroType';

interface BlockData {
  [key: `items_${number}_image`]: number;
  [key: `items_${number}_youtube_id`]: string;
  [key: `items_${number}_paragraph`]: string;
  [key: `items_${number}_subheading`]: string;
  [key: `items_${number}_button`]: {
    title: string;
    url: string;
  };
}

interface StickyHeadingSectionProps {
  backdrop: string;
  heading: string;
  items: unknown;
  blockData: BlockData;
}

export default function StickyHeadingSection({backdrop, heading, items, blockData} : StickyHeadingSectionProps) {
  const target = useRef<HTMLDivElement>(null);
  const router = useParams();
  const { slug } = router;

  const restItems = typeof items === 'number'
  ? [...Array(items)].map((_, i) => ({
      image: blockData[`items_${i}_image`],
      youtubeID: blockData[`items_${i}_youtube_id`],
      paragraph: blockData[`items_${i}_paragraph`],
      subheading: blockData[`items_${i}_subheading`],
      button: blockData[`items_${i}_button`],
    }))
  : [];

  return (
    <div className="sticky-heading-section" ref={target}>
      { slug == null ? <SpecialHeroType /> :
        <div className="sticky-heading-section__backdrop">
          <div className="heading-style-1">{backdrop}</div>
        </div>
      }
      <div className="sticky-heading-section__inner grid">
        <div className="sticky-heading-section__main">
          <h2 className="sticky-heading-section__heading heading-style-4">{heading}</h2>
          {restItems?.map((item, i) => (
            <div key={i} className="sticky-heading-section__article">
              <button
                className="sticky-heading-section__image"
                // onClick={() => {
                //   toggleModal(index)
                // }}
              >
                { item.youtubeID &&
                  <svg viewBox="0 0 30 34.5">
                    <path d="m3.5 34.5-3.5-2V2l3.5-2L30 15.2v4zM4.7 6v22.4l19.5-11.2z" />
                  </svg>
                }
                {/* <PictureLoader
                  :id="item.image"
                /> */}
              </button>
              <div className="sticky-heading-section__context">
                <p className="paragraph-style-3">{item.paragraph}</p>
                {item.button?.url && (
                  <Link
                    className="link-btn"
                    href={item.button.url.replace(/^.*\/\/[^\/]+/, '').replace(/\/$/, '')}
                  >
                    {item.button.title}
                    <svg viewBox="0 0 246.4 197.1">
                      <path d="M123.2 0C72.2 0 26.4 23.2 0 60.3v76.5c26.4 37 72.2 60.3 123.2 60.3s96.8-23.2 123.2-60.3V60.3C220 23.2 174.2 0 123.2 0m0 160.4c-46.2 0-87.8-25.2-103.9-61.8 16.1-36.7 57.8-61.8 103.9-61.8S211 62 227.1 98.6c-16.1 36.7-57.8 61.8-103.9 61.8" />
                      <path d="M121.3 135.3c19.7 0 35.7-16.4 35.7-36.7s-16-36.7-35.7-36.7-35.7 16.4-35.7 36.7 16 36.7 35.7 36.7" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}