import { IconInfoCircle } from '@tabler/icons-react';
import Link from 'next/link';

export const PurchaseInfo = () => {
  return (
    <div className="text-sm text-white">
      <p>
        <IconInfoCircle
          role="img"
          size={20}
          className="mr-1 inline text-primary"
        />
        Your purchase is protected by a secure connection from the WON platform.
        By purchasing from our store you agree and agree to our{' '}
        <Link
          href="/"
          className="text-primary duration-150 hover:text-primary/70"
        >
          terms of use
        </Link>
        .
      </p>
      <p>
        After making the purchase you are entitled to a refund within a maximum
        of 30 days, without any additional cost, as long as the download of the
        purchased game has not occurred after your purchase.
      </p>
    </div>
  );
};
