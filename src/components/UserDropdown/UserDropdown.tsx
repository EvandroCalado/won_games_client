import {
  IconChevronDown,
  IconHeart,
  IconLogout,
  IconUserCircle,
} from '@tabler/icons-react';
import Link from 'next/link';
import { FC } from 'react';
import { Dropdown } from '../Dropdown';

export type UserDropdownProps = {
  username: string;
};

export const UserDropdown: FC<UserDropdownProps> = ({ username }) => {
  return (
    <Dropdown
      title={
        <div className="flex items-center gap-2">
          <IconUserCircle />
          {username}
          <IconChevronDown />
        </div>
      }
    >
      <nav className="w-64 [&>a:not(:last-child)]:border-b-[1px] [&>a:not(:last-child)]:border-b-lightGray">
        <Link
          href="/profile/me"
          className="flex items-center gap-4 bg-white px-8 py-4 text-black transition-[background,color] duration-150 hover:bg-primary hover:text-white"
        >
          <IconUserCircle />
          <span>My profile</span>
        </Link>
        <Link
          href="/wishlist"
          className="flex items-center gap-4 bg-white px-8 py-4 text-black transition-[background,color] duration-150 hover:bg-primary hover:text-white"
        >
          <IconHeart />
          <span>Wishlist</span>
        </Link>
        <Link
          href="/logout"
          className="flex items-center gap-4 bg-white px-8 py-4 text-black transition-[background,color] duration-150 hover:bg-primary hover:text-white"
        >
          <IconLogout />
          <span>Sign out</span>
        </Link>
      </nav>
    </Dropdown>
  );
};
