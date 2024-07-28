import { FC, ReactNode } from 'react';
import SlickSlider, { Settings } from 'react-slick';

export type SliderSettings = Settings;

export type SliderProps = {
  children: ReactNode;
  settings: SliderSettings;
};

export const Slider: FC<SliderProps> = ({ children, settings }) => {
  return <SlickSlider {...settings}>{children}</SlickSlider>;
};
