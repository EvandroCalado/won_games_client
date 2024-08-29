'use client';

import { IconChevronLeft, IconChevronRight, IconX } from '@tabler/icons-react';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import SlickSlider from 'react-slick';
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

const settings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  slidesToShow: 4,
  arrows: false,
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

const modalSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  slidesToShow: 1,
  arrows: true,
  nextArrow: (
    <SlickArrowsFix>
      <IconChevronRight className="h-8 w-8 text-white duration-150 hover:text-white/70" />
    </SlickArrowsFix>
  ),
  prevArrow: (
    <SlickArrowsFix>
      <IconChevronLeft className="h-8 w-8 text-white duration-150 hover:text-white/70" />
    </SlickArrowsFix>
  ),
};

export type GalleryItemProps = {
  src: string;
  alt: string | null;
};

export type GalleryProps = {
  items: GalleryItemProps[];
};

export const Gallery: FC<GalleryProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const slider = useRef<SlickSlider>(null);

  const handleKeyUp = ({ key }: KeyboardEvent) => {
    key === 'Escape' && setIsOpen(false);
  };

  useEffect(() => {
    addEventListener('keyup', handleKeyUp);

    return () => {
      removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <section className="game-card-slider -mx-4">
      {/* galerry thumbs */}
      <Slider ref={slider} settings={settings}>
        {items.map((item, index) => (
          <Image
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.alt}`}
            width={124}
            height={68}
            priority
            sizes="(124px, 68px)"
            role="button"
            className="h-44 w-96 cursor-pointer snap-x object-cover duration-150 hover:brightness-125"
            onClick={() => {
              slider.current?.slickGoTo(index, true);
              setIsOpen(true);
            }}
          />
        ))}
      </Slider>
      {/* modal */}
      <div
        aria-label="modal"
        className={`${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'} fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/70 duration-150`}
        aria-hidden={!isOpen}
      >
        {/* close button */}
        <IconX
          size={40}
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 cursor-pointer text-primary duration-150 hover:brightness-75 active:brightness-90"
        />
        {/* modal content */}
        <div className="max-h-[800px] w-full max-w-7xl">
          <Slider ref={slider} settings={modalSettings}>
            {items.map((item, index) => (
              <Image
                key={`galerry-${index}`}
                src={item.src}
                alt={`Gallery - ${item.alt}`}
                width={124}
                height={68}
                priority
                sizes="(124px, 68px)"
                className="h-full w-full object-cover"
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
