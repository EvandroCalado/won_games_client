import {
  IconCreditCard,
  IconList,
  IconLogout,
  IconUserCircle,
} from '@tabler/icons-react';
import Link from 'next/link';

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders';
};

export const ProfileMenu = ({
  activeLink = '/profile/me',
}: ProfileMenuProps) => (
  <nav className="flex flex-row bg-white text-black md:flex-col md:border-none">
    <Link
      href="/profile/me"
      className={`${activeLink === '/profile/me' ? 'bg-primary text-white' : ''} flex w-full items-center gap-4 p-4 duration-150 hover:bg-primary hover:text-white max-md:justify-center`}
    >
      <IconUserCircle role="img" />
      <span className="max-md:hidden">My profile</span>
    </Link>
    <Link
      href="/profile/cards"
      className={`${activeLink === '/profile/cards' ? 'bg-primary text-white' : ''} flex w-full items-center gap-4 p-4 duration-150 hover:bg-primary hover:text-white max-md:justify-center`}
    >
      <IconCreditCard role="img" />
      <span className="max-md:hidden">My cards</span>
    </Link>
    <Link
      href="/profile/orders"
      className={`${activeLink === '/profile/orders' ? 'bg-primary text-white' : ''} flex w-full items-center gap-4 p-4 duration-150 hover:bg-primary hover:text-white max-md:justify-center`}
    >
      <IconList role="img" />
      <span className="max-md:hidden">My orders</span>
    </Link>
    <Link
      href="/logout"
      className="flex w-full items-center gap-4 p-4 duration-150 hover:bg-primary hover:text-white max-md:justify-center"
    >
      <IconLogout role="img" />
      <span className="max-md:hidden">Sign out</span>
    </Link>
  </nav>
);
