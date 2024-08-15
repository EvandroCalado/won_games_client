'use client';

import {
  CartList,
  CartListProps,
  Container,
  Empty,
  GameCardProps,
  Heading,
  HighlightProps,
  PaymentOptions,
  PaymentOptionsProps,
  Separator,
  Showcase,
} from '@/components';
import { FC } from 'react';
import { Base } from '../Base';

export type CartProps = {
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
} & CartListProps &
  PaymentOptionsProps;

export const Cart: FC<CartProps> = ({
  items,
  total,
  cards,
  recommendedGames,
  recommendedHighlight,
}) => {
  const handlePayment = () => {};

  return (
    <Base>
      <Container>
        <Heading lineLeft>My cart</Heading>

        {/* cart items and payment or empty */}
        {items.length ? (
          <div className="mt-8 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:[&>:first-child]:col-span-2">
            <CartList items={items} total={total} />
            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </div>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Back to the store and explore great games and offers"
            hasLink
          />
        )}
      </Container>

      <Separator />

      <Showcase
        title="You may like this games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
};
