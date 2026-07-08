"use client"

// components/ComponentRenderer/ComponentRenderer.tsx
import type { ComponentType } from 'react';

// Import your components explicitly — no auto-registration in Next.js
import StickyHeadingSection from '@/components/StickyHeadingSection/StickyHeadingSection';
import CoreParagraph from './Core/CoreParagraph';
import Collage from '@/components/Collage/Collage';

// Component map — equivalent to Vue's dynamic component registry
const componentMap: Record<string, ComponentType<any>> = {
  'sticky-heading-section': StickyHeadingSection,
  'core-paragraph': CoreParagraph,
  'collage': Collage,
};

interface ModuleData {
  type: string;
  [key: string]: unknown;
}

interface ComponentRendererProps {
  moduleData: ModuleData;
}

export default function ComponentRenderer({ moduleData }: ComponentRendererProps) {
  const { type, ...rest } = moduleData;
  const Component = componentMap[type];

  if (!Component) {
    console.warn(`No component registered for type: "${type}"`);
    return null;
  }

  return <Component blockData={moduleData} {...rest} />;
}