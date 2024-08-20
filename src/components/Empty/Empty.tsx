import Image from 'next/image';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../Button';
import { Heading } from '../Heading';

export type EmptyProps = {
  title: string;
  description: string;
  hasLink?: boolean;
  className?: string;
};

export const Empty: FC<EmptyProps> = ({
  title,
  description,
  hasLink,
  className,
}) => {
  return (
    <div
      className={twMerge(
        'flex flex-col items-center justify-center gap-4',
        className,
      )}
    >
      <Image
        src="/img/empty.svg"
        alt="A gamer in a couch playng videogame"
        width={300}
        height={300}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <Heading size="2xl" className="text-primary">
        {title}
      </Heading>
      <p className="text-center text-lg font-light text-white">{description}</p>

      {hasLink && (
        <Button as="a" href="/">
          Go back to store
        </Button>
      )}
    </div>
  );
};
