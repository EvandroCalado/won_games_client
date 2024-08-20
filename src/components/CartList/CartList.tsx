import { formatPrice } from '@/utils/format-price';
import Link from 'next/link';
import { FC } from 'react';
import { Button } from '../Button';
import { GameItem, GameItemProps } from '../GameItem';

export type CartListProps = {
  items: GameItemProps[];
  total: number;
  hasButton?: boolean;
};

export const CartList: FC<CartListProps> = ({
  items,
  total,
  hasButton = false,
}) => {
  return (
    <div className="flex h-full flex-col justify-between bg-white">
      <div>
        {items.map((item, index) => (
          <GameItem key={item.title + index} {...item} />
        ))}
      </div>

      <div className="flex items-center justify-between bg-lightGray p-5 text-sm text-black md:p-2 md:text-base">
        {!hasButton && <span>Total:</span>}
        <span className="font-semibold text-primary">{formatPrice(total)}</span>
        {hasButton && (
          <Link href="/cart">
            <Button>Buy it now</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
