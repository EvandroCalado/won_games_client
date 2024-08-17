import Image from 'next/image';
import { FC } from 'react';
import { Heading } from '../Heading';
import { PaymentCard } from '../PaymentOptions';

export type CardsListProps = {
  cards?: PaymentCard[];
};

export const CardsList: FC<CardsListProps> = ({ cards }) => {
  return (
    <div>
      <Heading lineBottomPrimary color="black" className="mb-8">
        My cards
      </Heading>

      {cards?.map((card) => (
        <div
          key={card.number}
          className="mb-4 flex items-center gap-4 bg-gray/20 p-4"
        >
          <Image
            src={card.img}
            alt={card.flag}
            width={40}
            height={25}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <span>{card.number}</span>
        </div>
      ))}
    </div>
  );
};
