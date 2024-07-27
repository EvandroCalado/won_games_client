import Image from 'next/image';
import { FC } from 'react';
import { Button } from '../Button';
import { Heading } from '../Heading';

export type HighlightProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  backgroundImage?: string;
  floatImage?: string;
  alignment?: 'right' | 'left';
};

export const Highlight: FC<HighlightProps> = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alignment = 'right',
}) => {
  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="relative grid h-56 grid-cols-6 bg-cover bg-center bg-no-repeat after:absolute after:h-full after:w-full after:bg-black/60 after:content-[''] md:h-80"
    >
      {/* float image */}
      {!!floatImage && (
        <div
          className={`${alignment === 'left' && 'order-last'} relative col-span-2 h-40 w-full self-end pl-4 sm:h-56 md:h-80 md:pl-11`}
        >
          <Image
            src={floatImage}
            alt={title}
            fill
            priority
            className="z-20 object-contain"
          />
        </div>
      )}
      {/* content */}
      <div
        className={`${floatImage ? 'col-span-4' : 'col-span-6'} ${alignment === 'left' ? 'items-start' : 'items-end'} z-10 flex flex-col gap-2 p-4 text-right md:justify-end md:p-11`}
      >
        <Heading as="h4" className="font-bold md:text-3xl">
          {title}
        </Heading>
        <Heading as="h6" className="font-light md:text-xl">
          {subtitle}
        </Heading>
        <Button as="a" href={buttonLink} className="mt-6">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
};
