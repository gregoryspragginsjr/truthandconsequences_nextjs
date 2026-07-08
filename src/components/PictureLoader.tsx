import { useState, useEffect } from 'react';
import getImage from '../helpers/getImage';
import Picture from './Picture';

interface MediaSize {
  source_url: string;
  width: number;
  height: number;
  mime_type: string;
}

interface MediaDetails {
  width: number;
  height: number;
  sizes: Record<string, MediaSize>;
}

interface ImageData {
  src: string;
  alt_text: string;
  media_details: MediaDetails;
  width: number;
  height: number;
  sizes?: Record<string, {
    source_url: string;
    width: number;
    height: number;
  }>;
}

interface PictureLoaderProps {
  id: number | string;
  classes?: string;
  size?: string;
  loading?: 'lazy' | 'eager';
  // onImageLoad?: (image: ImageData) => void;
}

export default function PictureLoader({ classes, id, size = 'desktop', loading = 'lazy'}: PictureLoaderProps) {
  const [image, setImage] = useState<ImageData | undefined>(undefined);

  useEffect(() => {
    const numericId = Number(id);

    if (isNaN(numericId)) {
      return;
    }

    (async () => {
      setImage(await getImage(numericId));
    })();
  }, [id]);

  if (!image) return null;

  return (
    <Picture
      classes={classes}
      alt={image.alt_text}
      sizes={image.media_details.sizes}
      size={size}
    />
  );

}