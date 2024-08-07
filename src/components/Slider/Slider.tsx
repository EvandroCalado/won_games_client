'use client';

import { forwardRef, ForwardRefRenderFunction, ReactNode } from 'react';
import SlickSlider, { Settings } from 'react-slick';

export type SliderSettings = Settings;

export type SliderProps = {
  children: ReactNode;
  settings: SliderSettings;
};

const SliderComponent: ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref,
) => {
  return (
    <SlickSlider ref={ref} {...settings}>
      {children}
    </SlickSlider>
  );
};

export const Slider = forwardRef(SliderComponent);
