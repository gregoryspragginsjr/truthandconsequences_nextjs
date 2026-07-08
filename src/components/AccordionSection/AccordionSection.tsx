'use client';

import { useState, useEffect } from 'react';
import getTaxonomyTerm from '../../helpers/getTaxonomyTerm';
import Accordion from '@/components/Accordion/Accordion';

interface Item {
  heading: string;
  context: string;
  tags?: string[];
}

interface BlockData {
  [key: `items_${number}_heading`]: string;
  [key: `items_${number}_context`]: string;
}

interface AccordionSectionProps {
  items_type?: string;
  heading?: string;
  items?: number;
  blockData: BlockData;
}

export default function AccordionSection({
  items_type = 'manual',
  heading,
  items,
  blockData,
}: AccordionSectionProps) {
  const [restItems, setRestItems] = useState<Item[]>([]);

  useEffect(() => {
    const init = async () => {
      if (items_type !== 'manual') {
        const res = await fetch(
          `https://welcometruthv2.gregoryspraggins.com/wp-json/wp/v2/${items_type}`
        );
        const posts = await res.json();

        const mapped = await Promise.all(
          posts.map(async (p: Record<string, any>) => {
            const namedJobTags = await Promise.all(
              p['job-tags'].map(async (termId: number) => {
                const termObj = await getTaxonomyTerm('job-tags', termId) as any;
                return termObj?.name as string | undefined;
              })
            );

            return {
              heading: p.title.rendered,
              context: p.excerpt.rendered,
              tags: namedJobTags.filter(Boolean) as string[],
            };
          })
        );

        setRestItems(mapped);
      } else {
        const mapped = typeof items === 'number'
          ? [...Array(items)].map((_, i) => ({
              heading: blockData[`items_${i}_heading`],
              context: blockData[`items_${i}_context`],
            }))
          : [];

        setRestItems(mapped);
      }
    };

    init();
  }, [items_type, items, blockData]);

  return (
    <div className="accordion-section">
      <div className="accordion-section__inner grid">
        <div className="accordion-section__main">
          <h2 className="accordion-section__heading heading-style-4">
            {heading}
          </h2>
          <Accordion single={false}>
            {({ toggleActive, active }: { toggleActive: (i: number) => void; active: number[] }) => (
              <>
                {restItems.map((item, i) => (
                  <article
                    key={i}
                    className="accordion__panel"
                    data-accordion-panel
                  >
                    <h2 className="accordion__header">
                      <button
                        className="accordion__button"
                        data-accordion-button
                        aria-expanded={active.includes(i)}
                        onClick={() => toggleActive(i)}
                      >
                        <div className="dot">{i + 1}</div>
                        {item.heading}
                        {item.tags && item.tags.length > 0 && (
                          <div className="accordion__tags">
                            {item.tags.map((tag, i) => (
                              <div key={i} className="pill-btn">{tag}</div>
                            ))}
                          </div>
                        )}
                        <span className="accordion__plus" />
                      </button>
                    </h2>
                    <div
                      className="accordion__window"
                      data-accordion-window
                    >
                      <div
                        className="accordion__content"
                        data-accordion-content
                        dangerouslySetInnerHTML={{
                          __html: `<p>${item.context
                            .replace(/\n{2}/g, '&nbsp;</p><p>')
                            .replace(/\n/g, '&nbsp;<br />')}</p>`,
                        }}
                      />
                    </div>
                  </article>
                ))}
              </>
            )}
          </Accordion>
        </div>
      </div>
    </div>
  );
}