'use client';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { FC } from 'react';
import { GameCard, GameCardProps } from '../GameCard/GameCard';
import { Slider, SliderSettings } from '../Slider';

type SlickArrowsFixProps = {
  children: React.ReactNode;
  currentSlide?: string;
  slideCount?: string;
};

const SlickArrowsFix: FC<SlickArrowsFixProps> = ({
  children,
  currentSlide,
  slideCount,
  ...props
}) => (
  <span className={`${currentSlide} ${slideCount}`} {...props}>
    {children}
  </span>
);

export type GameCardSliderProps = {
  items: GameCardProps[];
  color?: 'white' | 'black';
};

export const GameCardSlider: FC<GameCardSliderProps> = ({
  items,
  color = 'white',
}) => {
  const settings: SliderSettings = {
    slidesToShow: 4,
    infinite: false,
    lazyLoad: 'ondemand',
    nextArrow: (
      <SlickArrowsFix>
        <IconChevronRight
          aria-label="next games"
          size={32}
          color="currentColor"
        />
      </SlickArrowsFix>
    ),
    prevArrow: (
      <SlickArrowsFix>
        <IconChevronLeft
          aria-label="prev games"
          size={32}
          color="currentColor"
        />
      </SlickArrowsFix>
    ),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          arrows: false,
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 570,
        settings: {
          arrows: false,
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          slidesToShow: 1.1,
        },
      },
    ],
  };

  return (
    <section className={`game-card-slider text-${color} -mx-4 my-10`}>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <GameCard key={item.title + index} {...item} />
        ))}
      </Slider>
    </section>
  );
};
