'use client';

import {
  IconMenu3,
  IconSearch,
  IconShoppingCart,
  IconX,
} from '@tabler/icons-react';
import Link from 'next/link';
import { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../Button';
import { Logo } from '../Logo';

export type MenuProps = {
  username?: string;
};

export const Menu: FC<MenuProps> = ({ username }) => {
  const [isOpen, setIsOpen] = useState(false);

  // styles
  const menuStyles = `${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`;
  const linkStyles =
    'after-border-secondary relative w-max text-center text-xl font-bold text-black after:absolute after:-bottom-1 after:left-1/2 after:w-0 after:border-b-2 after:border-primary after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full';
  const menuAnimaionStyles = `${isOpen ? 'translate-y-0' : 'translate-y-10 md:translate-y-0'}`;

  return (
    <header className="relative flex items-center justify-between gap-8 py-4 transition-all">
      {/* menu mobile */}
      <IconMenu3
        className="cursor-pointer text-white md:hidden"
        aria-label="open menu"
        onClick={() => setIsOpen(true)}
      />
      {/* logo */}
      <Logo
        hideOnMobile
        className="max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2"
      />
      {/* nav links desktop */}
      <div
        className={twMerge(
          'hidden items-center gap-4 transition-all duration-300 md:flex [&>a]:text-lg [&>a]:font-medium [&>a]:text-white',
          menuAnimaionStyles,
        )}
      >
        <Link href="/" className={linkStyles}>
          Home
        </Link>
        <Link href="/" className={linkStyles}>
          Store
        </Link>
      </div>
      {/* search, cart and sign in */}
      <div className="ml-auto flex items-center gap-4">
        <IconSearch className="cursor-pointer text-white" aria-label="search" />
        <IconShoppingCart
          className="cursor-pointer text-white"
          aria-label="open shopping cart"
        />
        {!username && <Button className="hidden md:block">Sign in</Button>}
      </div>
      {/* menu mobile */}
      <nav
        aria-hidden={!isOpen}
        className={`absolute inset-0 flex h-screen flex-1 flex-col items-center justify-center gap-16 overflow-hidden bg-white transition-opacity duration-300 ${menuStyles}`}
      >
        <IconX
          aria-label="close menu"
          onClick={() => setIsOpen(false)}
          className="absolute right-0 top-0 m-4 cursor-pointer"
        />
        {/* nav links mobile */}
        <div
          className={twMerge(
            'flex flex-col items-center justify-between gap-4 transition-all duration-300',
            menuAnimaionStyles,
          )}
        >
          <Link href="/" className={linkStyles}>
            Home
          </Link>
          <Link href="/" className={linkStyles}>
            Store
          </Link>

          {!!username && (
            <>
              <Link href="/" className={linkStyles}>
                My account
              </Link>

              <Link href="/" className={linkStyles}>
                Wishlist
              </Link>
            </>
          )}
        </div>
        {/* login or sign up */}
        {!username && (
          <div
            className={twMerge(
              'flex w-full flex-col items-center gap-4 px-12 transition-all duration-300',
              menuAnimaionStyles,
            )}
          >
            <Button size="lg" className="w-full">
              Log in now
            </Button>

            <span className="relative my-2 block bg-white px-0.5 text-xs">
              or
              <div className="border-1 absolute left-1/2 top-1/2 -z-10 h-0.5 w-10 -translate-x-1/2 bg-black"></div>
            </span>

            <Button as="a" href="/signup">
              Sign up
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
