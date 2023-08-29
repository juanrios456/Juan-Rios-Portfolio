'use client'

import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import styles from './slideshow.module.css'
import Image from 'next/image';

register();

export const Slideshow = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <swiper-container
      ref={swiperElRef}
      navigation="true"
      loop={true}
      effect={'cards'}
      pagination={{
          clickable: true,
        }}
      class={styles.Slideshow}
    >
      <swiper-slide class={styles.slideshowChild}><Image src='/favicon.ico' height={'200'} width={'200'} /></swiper-slide>
      <swiper-slide class={styles.slideshowChild}>Slide 2</swiper-slide>
      <swiper-slide class={styles.slideshowChild}>Slide 3</swiper-slide>
    </swiper-container>
  );
};