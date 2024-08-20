import { formatPrice } from '@/utils/format-price';
import { IconHeart, IconShoppingCartPlus } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Button } from '../Button';
import { Heading } from '../Heading';
import { Ribbon } from '../Ribbon';

export type GameCardProps = {
  title: string;
  developer: string;
  img: string;
  price: number;
  promotionalPrice?: number;
  favorite?: boolean;
  onFav?: () => void;
  ribbon?: string;
  ribbonColor?: 'primary' | 'secondary';
  ribbonSize?: 'sm' | 'md';
};

export const GameCard: FC<GameCardProps> = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  onFav,
  ribbon,
  ribbonColor,
  ribbonSize = 'sm',
}) => {
  return (
    <article className="relative flex h-full w-full flex-col border-2 border-lightGray bg-white">
      {/* corner ribbon */}
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
      {/* image box */}
      <Link href={''} className="relative min-h-36 w-full bg-lightGray">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      {/* content */}
      <div className="relative m-2 flex h-full flex-col justify-between">
        {/* info */}
        <Link href={''} className="max-w-[calc(100% - 250px)]">
          <Heading as="h3" color="black" className="font-bold">
            {title}
          </Heading>
          <Heading as="h5" size="sm" className="text-gray">
            {developer}
          </Heading>
        </Link>
        {/* favorite */}
        <div role="button" onClick={onFav}>
          {favorite ? (
            <IconHeart
              aria-label="Remove from wishlist"
              className="absolute right-2 top-2 text-primary"
              fill="currentColor"
            />
          ) : (
            <IconHeart
              aria-label="Add to wishlist"
              className="absolute right-2 top-2 text-primary"
            />
          )}
        </div>
        {/* price box */}
        <div className="mt-2 flex items-center justify-end">
          {!!promotionalPrice && (
            <div className="mr-2 text-gray line-through">
              {formatPrice(price)}
            </div>
          )}
          <div className="mr-1 rounded bg-secondary px-2 py-0.5 text-white">
            {formatPrice(promotionalPrice || price)}
          </div>
          <Button icon={<IconShoppingCartPlus />} size="sm" className="px-2" />
        </div>
      </div>
    </article>
  );
};
