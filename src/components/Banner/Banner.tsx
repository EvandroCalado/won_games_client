import { FC } from 'react';
import { Button } from '../Button';
import { Heading } from '../Heading';
import { Ribbon } from '../Ribbon';

export type RibbonSize = 'sm' | 'md';
export type RibbonColor = 'primary' | 'secondary';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: string;
  ribbonSize?: RibbonSize;
  ribbonColor?: RibbonColor;
};

export const Banner: FC<BannerProps> = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonSize,
  ribbonColor,
}) => {
  return (
    <div className="relative md:mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      {/* corner ribbon */}
      {!!ribbon && (
        <Ribbon
          color={ribbonColor}
          size={ribbonSize}
          className="max-md:right-0 [&>span]:max-md:hidden"
        >
          {ribbon}
        </Ribbon>
      )}
      {/* image */}
      <div
        style={{ backgroundImage: `url(${img})` }}
        role="img"
        aria-label={title}
        className="h-56 w-full bg-lightGray bg-cover bg-center bg-no-repeat md:h-[580px]"
      ></div>
      {/* caption */}
      <div className="w-full rounded-bl rounded-br p-4 max-md:bg-black/70 md:absolute md:bottom-0 md:left-0 md:bg-gradient-to-t md:from-black/90 md:via-black/80 md:to-black/0 md:p-6">
        <Heading className="font-bold">{title}</Heading>
        <h3
          dangerouslySetInnerHTML={{ __html: subtitle }}
          className="mb-6 text-sm text-white md:text-lg [&>p>strong]:text-primary"
        ></h3>
        <Button size="lg" as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};
