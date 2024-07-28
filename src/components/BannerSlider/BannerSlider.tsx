import { Banner, BannerProps } from '@/components';
import { FC } from 'react';
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
    <section className="banner-slider">
      <Slider settings={settings}>
        {items.map((item) => (
          <Banner
            key={item.title}
            {...item}
            className="md:mx-auto md:max-w-3xl"
          />
        ))}
      </Slider>
    </section>
  );
};
