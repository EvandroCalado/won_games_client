import { FC } from 'react';
import { Button } from '../Button';
import { Heading } from '../Heading';

export type BannerProps = {
  img: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
};

export const Banner: FC<BannerProps> = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
}) => {
  return (
    <div className="relative shadow-lg">
      {/* image */}
      <div
        style={{ backgroundImage: `url(${img})` }}
        role="img"
        aria-label={title}
        className="h-56 w-full bg-lightGray bg-cover bg-center bg-no-repeat md:h-[580px]"
      ></div>
      {/* caption */}
      <div className="w-full rounded-bl rounded-br p-6 max-md:bg-black/70 md:absolute md:bottom-0 md:left-0 md:bg-gradient-to-t md:from-black/90 md:via-black/70 md:to-black/0 md:p-10">
        <Heading className="font-bold">{title}</Heading>
        <h3
          dangerouslySetInnerHTML={{ __html: subtitle }}
          className="mb-2 text-sm text-white md:text-lg [&>p>strong]:text-primary"
        ></h3>
        <Button size="lg" as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};
