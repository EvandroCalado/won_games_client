import { formatPrice } from '@/utils/format-price';
import { IconDeviceDesktopDown } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Heading } from '../Heading';

export type paymentInfoProps = {
  number: string;
  flag: string;
  img: string;
  purchaseDate: string;
};

export type GameItemProps = {
  img: string;
  title: string;
  price: number;
  downloadLink?: string;
  paymentInfo?: paymentInfoProps;
};

export const GameItem: FC<GameItemProps> = ({
  img,
  title,
  price,
  downloadLink,
  paymentInfo,
}) => {
  return (
    <div className="space-y-4 border-b border-lightGray py-4 md:flex md:justify-between">
      {/* content */}
      <div className="flex gap-4">
        <Image
          src={img}
          alt={title}
          width={150}
          height={150}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-14 w-24 flex-shrink-0 object-cover md:h-20 md:w-44"
        />
        <div className="flex w-full flex-col items-start">
          <div className="flex w-full gap-4 max-md:justify-between">
            <Heading as="h3" size="md" color="black">
              {title}
            </Heading>
            {!!downloadLink && (
              <Link
                href={downloadLink}
                target="_blank"
                aria-label={`Get ${title} here`}
                className="text-primary duration-150 hover:text-primary/70"
              >
                <IconDeviceDesktopDown />
              </Link>
            )}
          </div>
          <p className="rounded-sm bg-secondary px-4 py-0.5 text-sm font-bold text-white">
            {formatPrice(price)}
          </p>
        </div>
      </div>

      {/* payment */}
      {!!paymentInfo && (
        <div className="flex flex-col-reverse justify-between gap-4 text-gray md:flex-col">
          <div className="flex gap-2 md:justify-end">
            <span>{paymentInfo.number}</span>
            <Image
              src={paymentInfo.img}
              alt={paymentInfo.flag}
              width={40}
              height={60}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p>{paymentInfo.purchaseDate}</p>
        </div>
      )}
    </div>
  );
};
