import React from 'react';

import Gallery from 'react-grid-gallery';
import shuffle from 'shuffle-array';

/* images */
// import i1 from '../../assets/images/gallery/highlights/i1.jpg';
// import i2 from '../../assets/images/gallery/highlights/i2.jpg';
// import i3 from '../../assets/images/gallery/highlights/i3.jpg';
// import i4 from '../../assets/images/gallery/highlights/i4.jpg';
// import i5 from '../../assets/images/gallery/highlights/i5.jpg';
// import i6 from '../../assets/images/gallery/highlights/i6.jpg';
// import i7 from '../../assets/images/gallery/highlights/i7.jpg';
// import i8 from '../../assets/images/gallery/highlights/i8.jpg';
// import i9 from '../../assets/images/gallery/highlights/i9.jpg';
// import i10 from '../../assets/images/gallery/highlights/i10.jpg';
// import i11 from '../../assets/images/gallery/highlights/i11.jpg';
// import i12 from '../../assets/images/gallery/highlights/i12.jpg';
// import i13 from '../../assets/images/gallery/highlights/i13.jpg';
// import i14 from '../../assets/images/gallery/highlights/i14.jpg';
// import i15 from '../../assets/images/gallery/highlights/i15.jpg';
// import i16 from '../../assets/images/gallery/highlights/i16.jpg';
// import i17 from '../../assets/images/gallery/highlights/i17.jpg';
// import i18 from '../../assets/images/gallery/highlights/i18.jpg';
// import i19 from '../../assets/images/gallery/highlights/i19.jpg';
// import i20 from '../../assets/images/gallery/highlights/i20.jpg';
// import i21 from '../../assets/images/gallery/highlights/i21.jpg';
// import i22 from '../../assets/images/gallery/highlights/i22.jpg';
// import i23 from '../../assets/images/gallery/highlights/i23.jpg';
// import i24 from '../../assets/images/gallery/highlights/i24.jpg';
// import i25 from '../../assets/images/gallery/highlights/i25.jpg';
// import i26 from '../../assets/images/gallery/highlights/i26.jpg';
// import i27 from '../../assets/images/gallery/highlights/i27.jpg';
// import i28 from '../../assets/images/gallery/highlights/i28.jpg';
// import i29 from '../../assets/images/gallery/highlights/i29.jpg';
// import i30 from '../../assets/images/gallery/highlights/i30.jpg';
// import i31 from '../../assets/images/gallery/highlights/i31.jpg';
// import i32 from '../../assets/images/gallery/highlights/i32.jpg';
// import i33 from '../../assets/images/gallery/highlights/i33.jpg';
// import i34 from '../../assets/images/gallery/highlights/i34.jpg';
// import i35 from '../../assets/images/gallery/highlights/i35.jpg';
// import i36 from '../../assets/images/gallery/highlights/i36.jpg';
// import i37 from '../../assets/images/gallery/highlights/i37.jpg';
// import i38 from '../../assets/images/gallery/highlights/i38.jpg';
// import i39 from '../../assets/images/gallery/highlights/i39.jpg';
// import i40 from '../../assets/images/gallery/highlights/i40.jpg';
// import i41 from '../../assets/images/gallery/highlights/i41.jpg';
// import i42 from '../../assets/images/gallery/highlights/i42.jpg';
// import i43 from '../../assets/images/gallery/highlights/i43.jpg';
// import i44 from '../../assets/images/gallery/highlights/i44.jpg';
// import i45 from '../../assets/images/gallery/highlights/i45.jpg';
// import i46 from '../../assets/images/gallery/highlights/i46.jpg';
// import i47 from '../../assets/images/gallery/highlights/i47.jpg';
// import i48 from '../../assets/images/gallery/highlights/i48.jpg';
// import i49 from '../../assets/images/gallery/highlights/i49.jpg';

/* styles */
import './styles/gallery.css';

/* constants */
// const IMAGES = shuffle([
//   {
//     src: i1,
//     thumbnail: i1,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i2,
//     thumbnail: i2,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "get a load a this brodieee"
//   },
//   {
//     src: i3,
//     thumbnail: i3,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "I am the antichrist"
//   },
//   {
//     src: i4,
//     thumbnail: i4,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Get the hell outttaa here"
//   },
//   {
//     src: i5,
//     thumbnail: i5,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "After Rain (Jeshu John - designerspics.com)"
//   },
//   {
//     src: i6,
//     thumbnail: i6,
//     thumbnailWidth: 320,
//     thumbnailHeight: 213,
//     caption: "Man on BMX (Tom Eversley - isorepublic.com)"
//   },
//   {
//     src: i7,
//     thumbnail: i7,
//     thumbnailWidth: 320,
//     thumbnailHeight: 213,
//     caption: "Man on BMX (Tom Eversley - isorepublic.com)"
//   },
//   {
//     src: i8,
//     thumbnail: i8,
//     thumbnailWidth: 320,
//     thumbnailHeight: 213,
//     caption: "Man on BMX (Tom Eversley - isorepublic.com)"
//   },
//   {
//     src: i9,
//     thumbnail: i9,
//     thumbnailWidth: 320,
//     thumbnailHeight: 213,
//     caption: "Man on BMX (Tom Eversley - isorepublic.com)"
//   },
//   {
//     src: i10,
//     thumbnail: i10,
//     thumbnailWidth: 320,
//     thumbnailHeight: 213,
//     caption: "Man on BMX (Tom Eversley - isorepublic.com)"
//   },
//   {
//     src: i11,
//     thumbnail: i11,
//     thumbnailWidth: 320,
//     thumbnailHeight: 213,
//     caption: "Man on BMX (Tom Eversley - isorepublic.com)"
//   },
//   {
//     src: i12,
//     thumbnail: i12,
//     thumbnailWidth: 320,
//     thumbnailHeight: 213,
//     caption: "Man on BMX (Tom Eversley - isorepublic.com)"
//   },
//   {
//     src: i13,
//     thumbnail: i13,
//     thumbnailWidth: 320,
//     thumbnailHeight: 213,
//     caption: "Man on BMX (Tom Eversley - isorepublic.com)"
//   },
//   {
//     src: i14,
//     thumbnail: i14,
//     thumbnailWidth: 320,
//     thumbnailHeight: 213,
//     caption: "Man on BMX (Tom Eversley - isorepublic.com)"
//   },
//   {
//     src: i15,
//     thumbnail: i15,
//     thumbnailWidth: 320,
//     thumbnailHeight: 213,
//     caption: "Man on BMX (Tom Eversley - isorepublic.com)"
//   },
//   {
//     src: i16,
//     thumbnail: i16,
//     thumbnailWidth: 320,
//     thumbnailHeight: 213,
//     caption: "Man on BMX (Tom Eversley - isorepublic.com)"
//   },
//   {
//     src: i17,
//     thumbnail: i17,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i18,
//     thumbnail: i18,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i19,
//     thumbnail: i19,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i20,
//     thumbnail: i20,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i21,
//     thumbnail: i21,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i22,
//     thumbnail: i22,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i23,
//     thumbnail: i23,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i24,
//     thumbnail: i24,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i25,
//     thumbnail: i25,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i26,
//     thumbnail: i26,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i27,
//     thumbnail: i27,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i28,
//     thumbnail: i28,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i29,
//     thumbnail: i29,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i30,
//     thumbnail: i30,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i31,
//     thumbnail: i31,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i32,
//     thumbnail: i32,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i33,
//     thumbnail: i33,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i34,
//     thumbnail: i34,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i35,
//     thumbnail: i35,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i36,
//     thumbnail: i36,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i37,
//     thumbnail: i37,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i38,
//     thumbnail: i38,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i39,
//     thumbnail: i39,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i40,
//     thumbnail: i40,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i41,
//     thumbnail: i41,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i42,
//     thumbnail: i42,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i43,
//     thumbnail: i43,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i44,
//     thumbnail: i44,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i45,
//     thumbnail: i45,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i46,
//     thumbnail: i46,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i47,
//     thumbnail: i47,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i48,
//     thumbnail: i48,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
//   {
//     src: i49,
//     thumbnail: i49,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     caption: "Ahhhh, yeh jimmy this one's necker minnit"
//   },
// ]);

import { IMAGES } from '../constants/images.js';

/* component init */
export default () => (
  <div className='gallery-wrapper'>
    <Gallery
      images={shuffle(IMAGES)}
      rowHeight='250'
      enableLightbox={true}
      backdropClosesModal={true}
      lightboxWidth='3000'
      enableImageSelection={false} />
  </div>
);
