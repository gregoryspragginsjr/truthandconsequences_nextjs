import { useRef } from "react";
import Sticker from "@/components/Sticker/Sticker";

export default function HeroType({ variant = 'default', heading, stickers, blockData, special = false, className}: { variant?: string, heading: string, stickers: number[] | object[], blockData?: unknown, special?: boolean, className?: string } ) {
  const target = useRef<HTMLDivElement>(null);
  const preparedHeading = heading.replace(/(\bhttps?:\/\/\S+)|(\S+)/gi, "<span>$&</span>");

  return (
    <div
      className={`hero-type hero-type--${variant} ${className}`}
      ref={target}
    >
      <div className="hero-type__outer-wrap">
        <div className="hero-type__heading-wrap">
          {stickers.map((sticker, i) => (
            <Sticker
              key={i}
              className="hero-type__sticker"
            >
              TEST
              {/* { special ?
                <img {...sticker} /> :
                <PictureLoader size="sticker" />
              } */}
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