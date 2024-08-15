'use client';

import { IconPlus, IconShoppingCart } from '@tabler/icons-react';
import Image from 'next/image';
import { FC, useState } from 'react';
import { Button } from '../Button';
import { Heading } from '../Heading';
import { Radio } from '../Radio';

export type PaymentCard = {
  number: string;
  flag: string;
  img: string;
};

export type PaymentOptionsProps = {
  cards?: PaymentCard[];
  handlePayment?: () => void;
};

export const PaymentOptions: FC<PaymentOptionsProps> = ({
  cards,
  handlePayment,
}) => {
  const [ckecked, setChecked] = useState(false);

  return (
    <div className="bg-white p-4">
      {/* content */}
      <div>
        <Heading color="black" size="lg" lineBottomPrimary className="mb-10">
          Payment
        </Heading>

        {/* cards list */}
        <div className="space-y-2">
          {cards?.map((card) => (
            <label
              key={card.number}
              className="flex cursor-pointer items-center justify-between bg-gray/20 p-4"
            >
              <div className="flex w-full items-center gap-4">
                <Image
                  src={card.img}
                  alt={card.flag}
                  width={40}
                  height={25}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {card.number}
              </div>
              <Radio
                name="credit-card"
                id={card.number}
                value={card.number}
                onCheck={() => setChecked(true)}
              />
            </label>
          ))}

          {/* add card */}
          <div role="button" className="flex items-center gap-4 bg-gray/20 p-4">
            <IconPlus size={18} /> Add a new credit card
          </div>
        </div>
      </div>

      {/* buttons */}
      <div className="-mb-4 -ml-4 -mr-4 mt-10 flex items-center gap-4 bg-lightBg p-4">
        <Button as="a" variant="ghost" className="w-full px-2">
          Continue buying
        </Button>
        <Button
          onClick={handlePayment}
          disabled={!ckecked}
          className="w-full px-2"
        >
          <IconShoppingCart /> Buy now
        </Button>
      </div>
    </div>
  );
};
