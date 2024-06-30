'use client';
import { Icons } from '@/const/icons';
import { Images } from '@/const/images';
import Image from 'next/image';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HeroCarousel = () => {
  const heroImages: { imgUrl: string; alt: string }[] = [
    {
      imgUrl: Images.hero1,
      alt: 'Hero 1',
    },
    {
      imgUrl: Images.hero2,
      alt: 'Hero 2',
    },
    {
      imgUrl: Images.hero3,
      alt: 'Hero 3',
    },
    {
      imgUrl: Images.hero4,
      alt: 'Hero 4',
    },
    {
      imgUrl: Images.hero5,
      alt: 'Hero 5',
    },
  ];

  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        // autoPlay
        // interval={2000}
        infiniteLoop
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image
            key={image.alt}
            src={image.imgUrl}
            alt={image.alt}
            width={484}
            height={484}
            className="object-contain"
          />
        ))}
      </Carousel>

      <Image
        src={Icons.handDrawnArrow}
        alt="Hand drawn arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
      />
    </div>
  );
};

export default HeroCarousel;
