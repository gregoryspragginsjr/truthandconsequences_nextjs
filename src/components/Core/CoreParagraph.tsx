import { useRef } from "react";

interface attrsInterface {
  content: string
}

export default function CoreParagraph({ attrs }: { attrs: attrsInterface }) {
  const paragraph = useRef<HTMLDivElement>(null);

  return (
    <div ref={paragraph} className="core-paragraph grid paragraph-style-1">
      <p dangerouslySetInnerHTML={{ __html: attrs.content }} />
    </div>
  );
}