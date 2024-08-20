import { formatPrice } from '@/utils/format-price';
import Link from 'next/link';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../Button';
import { Empty } from '../Empty';
import { GameItem, GameItemProps } from '../GameItem';

export type CartListProps = {
  items?: GameItemProps[];
  total?: number;
  hasButton?: boolean;
  className?: string;
};

export const CartList: FC<CartListProps> = ({
  items = [],
  total,
  hasButton = false,
  className,
}) => {
  return (
    <div
      className={twMerge(
        'flex h-full flex-col justify-between bg-white',
        className,
      )}
    >
      {items?.length ? (
        <>
          <div className="px-4">
            {items.map((item, index) => (
              <GameItem key={item.title + index} {...item} />
            ))}
          </div>

          <div className="flex items-center justify-between bg-lightGray p-4 text-sm text-black md:text-base">
            {!hasButton && <span>Total:</span>}
            <span className="font-semibold text-primary">
              {total && formatPrice(total)}
            </span>
            {hasButton && (
              <Link href="/cart">
                <Button>Buy it now</Button>
              </Link>
            )}
          </div>
        </>
      ) : (
        <Empty
          title="Your cart is empty"
          description="Back to the store and explore great games and offers"
          hasLink
          className="gap-2 p-4 [&>img]:max-w-48 [&>p]:text-black"
        />
      )}
    </div>
  );
};
