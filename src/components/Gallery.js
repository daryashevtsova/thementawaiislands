import React from 'react';

import ImageGallery from 'react-image-gallery';

/* helpers */
import { renderVideo } from '../helpers/video';

/* images */
import i1 from '../../assets/images/carousel-home/compilation1.jpg';
import i2 from '../../assets/images/carousel-home/compilation2.jpg';
import i3 from '../../assets/images/carousel-home/compilation3.jpg';
import i4 from '../../assets/images/carousel-home/wooden_sign.jpg';
import i5 from '../../assets/images/carousel-home/air.jpg';

/* styles */
import 'react-image-gallery/styles/css/image-gallery.css';

const buildImages = () => {
  const IMAGES = [i1, i2, i3, i4, i5];
  const selectedImages =
    IMAGES.map(
      (image) => ({ original: image })
    );
  selectedImages.push({ renderItem: renderVideo });
  return selectedImages;
};

export default () => (
  <ImageGallery
    items={buildImages()}
    autoPlay={true}
    slideInterval={8000}
    showThumbnails={false}
    showPlayButton={false}
    showFullscreenButton={false}
    disableArrowKeys={false}
    />
);
