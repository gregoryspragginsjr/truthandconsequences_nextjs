interface MediaSize {
  source_url: string;
  width: number;
  height: number;
  mime_type: string;
}

interface PictureProps {
  classes?: string,
  alt?: string,
  sizes: Record<string, MediaSize>,
  size?: string,
  size_mobile?: string,  
}

export default function Picture({ classes, alt, sizes, size = 'desktop', size_mobile = 'mobile' }: PictureProps) {
  return (
    <picture className={classes}>
      <source
        media="(min-width:768px)"
        srcSet={sizes[size] ? sizes[size].source_url : sizes.full.source_url}
      />
      <img
        src={sizes[size_mobile] ? sizes[size_mobile].source_url : sizes.full.source_url}
        alt={alt}
        loading={'lazy'}
      />
    </picture>
  );
}