import { formatPrice } from '@/utils/format-price';
import { IconHeart, IconShoppingCartPlus } from '@tabler/icons-react';
import { FC } from 'react';
import { Button } from '../Button';
import { Heading } from '../Heading';
import { Ribbon } from '../Ribbon';

export type GameInfoProps = {
  title: string;
  description: string;
  price: number;
};

export const GameInfo: FC<GameInfoProps> = ({ title, description, price }) => {
  return (
    <div className="relative space-y-4 bg-white p-4">
      <Ribbon
        color="secondary"
        className="md:right-4 md:top-4 [&>span]:md:hidden"
      >
        {formatPrice(price)}
      </Ribbon>

      <Heading lineBottomPrimary size="3xl" color="black">
        {title}
      </Heading>

      <p className="md:w-3/4">{description}</p>

      <div className="flex flex-col gap-2 md:flex-row-reverse">
        <Button icon={<IconShoppingCartPlus />} className="max-md:w-full">
          Add to cart
        </Button>
        <Button icon={<IconHeart />} variant="ghost" className="max-md:w-full">
          Wishlist
        </Button>
      </div>
    </div>
  );
};
