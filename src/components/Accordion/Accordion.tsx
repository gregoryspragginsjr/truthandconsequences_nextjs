import { useRef, useState } from 'react';

interface AccordionProps {
  children: (props: {
    toggleActive: (i: number) => void;
    active: number[];
  }) => React.ReactNode;
  single: boolean;
}

export default function Accordion({ children, single = false }: AccordionProps ) {
  const accordion = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number[]>([]);

  const toggleActive = (b: number) => {
    const panels = accordion.current?.querySelectorAll('[data-accordion-panel]');
    const panel = panels?.[b] as HTMLElement;
    const panelSiblings = getSiblings(panel) as Element[];
    const window = panel?.querySelector('[data-accordion-window]') as HTMLElement;
    const content = panel?.querySelector('[data-accordion-content]') as HTMLElement;

    // Compute next state first — don't rely on active after calling setActive
    const isCurrentlyActive = active.includes(b);
    const nextActive = isCurrentlyActive
      ? active.filter(item => item !== b)
      : [...active, b];

    setActive(nextActive);

    // Use isCurrentlyActive — reliable, computed before setState
    if (isCurrentlyActive) {
      window?.setAttribute('style', 'height: 0; visibility: hidden;');
    } else {
      window?.setAttribute(
        'style',
        `height: ${content.offsetHeight}px; visibility: visible;`
      );
    }

    if (single) {
      setActive(nextActive.filter(item => item === b));
      panelSiblings
        .filter(item => (item as Element).localName !== 'code')
        .forEach(sibling => {
          sibling
            .querySelector('[data-accordion-window]')
            ?.setAttribute('style', 'height: 0; visibility: hidden;');
        });
    }
  };

  const getSiblings = (element: Element) => {
    const siblings = [];
    let sibling = element.parentNode?.firstChild;

    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== element) {
          siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }

    return siblings;
  }

  return (
    <div className="accordion" ref={accordion}>
      {children(({ toggleActive, active }))}
    </div>
  )
}