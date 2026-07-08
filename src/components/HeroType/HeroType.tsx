import { useRef } from "react";
import Sticker from "@/components/Sticker/Sticker";
import Image from 'next/image';
import PictureLoader from '@/components/PictureLoader';

interface HeroTypeProps {
  variant?: string;
  heading: string;
  stickers: number[] | object[] | string[];
  blockData?: unknown;
  special?: boolean;
  className?: string;
}

export default function HeroType({ variant = 'default', heading, stickers = [], blockData, special = false, className}: HeroTypeProps ) {
  const target = useRef<HTMLDivElement>(null);
  const preparedHeading = heading.replace(/(\bhttps?:\/\/\S+)|(\S+)/gi, "<span>$&</span>");

  console.log('OVER HERE');
  console.log(stickers);

  return (
    <div
      className={`hero-type hero-type--${variant} ${className}`}
      ref={target}
    >
      <div className="hero-type__outer-wrap">
        <div className="hero-type__heading-wrap">
          {Array.isArray(stickers) && stickers.map((sticker, i) => (
            <Sticker
              key={i}
              className="hero-type__sticker"
            >
              { special ?
                <Image width={300} height={300} {...sticker} alt="" /> :
                <PictureLoader
                  id={ sticker as number }
                  size="sticker"
                />
              }
            </Sticker>
          ))}
          { variant == 'small' ?
            <h1
              className="hero-type__heading"
              dangerouslySetInnerHTML={{ __html: heading }}
            /> : 
            <h1
              className="hero-type__heading"
              dangerouslySetInnerHTML={{ __html: preparedHeading }}
            />
          }
        </div>
      </div>
    </div>
  );
}