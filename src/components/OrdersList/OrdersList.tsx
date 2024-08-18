import { FC } from 'react';
import { Empty } from '../Empty';
import { GameItem, GameItemProps } from '../GameItem';
import { Heading } from '../Heading';

export type OrdersListProps = {
  items?: GameItemProps[];
};

export const OrdersList: FC<OrdersListProps> = ({ items = [] }) => {
  return (
    <div className="[&>:last-child]:border-b-0">
      <Heading lineBottomPrimary color="black" className="mb-8">
        My orders
      </Heading>

      {items?.length ? (
        items.map((item) => <GameItem key={item.downloadLink} {...item} />)
      ) : (
        <Empty
          title="Your have no orders"
          description="Back to the store and explore great games and offers"
          hasLink
        />
      )}
    </div>
  );
};
