import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './masthead.scss'
import { useTranslation } from 'react-i18next';

const items = [
  {
    src: `${process.env.PUBLIC_URL}/pictures/carousel/c_blue.jpg`,
    altText: 'Slide 1',
    caption: 'Flexible'
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/carousel/c_green.jpg`,
    altText: 'Slide 2',
    caption: 'Innovative'
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/carousel/c_white.jpg`,
    altText: 'Slide 3',
    caption: 'Improvement'
  },
  {
    src: `${process.env.PUBLIC_URL}/pictures/carousel/c_yellow.jpg`,
    altText: 'Slide 4',
    caption: 'Comprehensive'
  }
];

export default function Masthead() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { t } = useTranslation()

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={t(`Masthead.${item.caption}`)}/>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className='masthead-main'
      ride='carousel'
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
    </Carousel>
  );
}