'use client';

/* eslint-disable @typescript-eslint/no-unused-vars */
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { FC } from 'react';
import { GameCard, GameCardProps } from '../GameCard/GameCard';
import { Slider, SliderSettings } from '../Slider';

type SlickButtonFixProps = {
  children: React.ReactNode;
  currentSlide?: number;
  slideCount?: number;
};

const SlickButtonFix: FC<SlickButtonFixProps> = ({
  children,
  currentSlide,
  slideCount,
  ...props
}) => <span {...props}>{children}</span>;

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
      <SlickButtonFix>
        <IconChevronRight
          aria-label="next games"
          size={32}
          color="currentColor"
        />
      </SlickButtonFix>
    ),
    prevArrow: (
      <SlickButtonFix>
        <IconChevronLeft
          aria-label="prev games"
          size={32}
          color="currentColor"
        />
      </SlickButtonFix>
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
    <section
      className={`game-card-slider text-${color} my-10 -ml-3 -mr-4 md:-ml-2 md:-mr-4 2xl:-mx-[6px]`}
    >
      <Slider settings={settings}>
        {items.map((item, index) => (
          <GameCard key={item.title + index} {...item} />
        ))}
      </Slider>
    </section>
  );
};
