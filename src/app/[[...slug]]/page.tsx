import Image from "next/image";
import styles from "../page.module.css";

import ComponentRenderer from "@/components/ComponentRenderer";

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

interface WordPressPage {
  title: { rendered: string };
  excerpt: { rendered: string };
  block_data: Record<string, any>;
}

async function getPageData(pageName: string): Promise<WordPressPage> {
  console.log(pageName);

  const res = await fetch(
    `https://welcometruthv2.gregoryspraggins.com/wp-json/wp/v2/pages?slug=${pageName}`,
    {
      next: { revalidate: 3600 }
    } // ISR — revalidate every hour
  );

  if (!res.ok) throw new Error(`Failed to fetch page: ${pageName}`);

  const data = await res.json();

  if (!data.length) throw new Error(`Page not found: ${pageName}`);

  return data[0];
}

export default async function Page({ params }: PageProps) {
  // Resolve slug — same logic as your Nuxt code
  const { slug } = await params;

  console.log(slug);

  let pageName: string;

  if (Array.isArray(slug) && slug.length > 0) {
    pageName = slug[slug.length - 1];
  } else {
    pageName = 'home';
  }

  const post = await getPageData(pageName);

  // Same string cleanup you had in Nuxt
  const title = post.title.rendered
    .replace(/–/g, '-')
    .replace(/"/g, '"')
    .replace(/"/g, '"')
    .replace(/'/g, "'");

  const excerpt = post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, '');

  // Same block_data mapping you had in Nuxt
  const components = Object.values(post.block_data).map((component: any) => {
    const type = component.blockName
      .replace('acf/', '')
      .replace(/\//g, '-');

    return {
      type,
      ...component.attrs.data,
      attrs: component.attrs.data ? undefined : component.attrs,
      innerHTML: component.rendered ?? undefined,
    };
  });

  return (
    <main>
      <div className="page page--default">
        <h1 dangerouslySetInnerHTML={{ __html: `This is a Vue 3 / Nuxt to React / Next conversion test of: ${ title }` }} />
        {components.map((component, i) => (
          <ComponentRenderer key={i} {...component} moduleData={ component } />
        ))}
      </div>
    </main>
  );
}
