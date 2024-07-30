'use client';

import { FC } from 'react';
import { Banner, BannerProps } from '../Banner';
import { Slider, SliderSettings } from '../Slider';

export type BannerSliderProps = {
  items: BannerProps[];
};

export const settings: SliderSettings = {
  dots: true,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        vertical: false,
        verticalSwiping: false,
      },
    },
  ],
};

export const BannerSlider: FC<BannerSliderProps> = ({ items }) => {
  return (
    <section className="banner-slider relative z-10">
      <Slider settings={settings}>
        {items.map((item) => (
          <Banner key={item.title} {...item} />
        ))}
      </Slider>
    </section>
  );
};
