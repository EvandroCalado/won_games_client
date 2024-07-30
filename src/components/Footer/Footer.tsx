import Link from 'next/link';
import { FC } from 'react';
import { Heading } from '../Heading';
import { Logo } from '../Logo';

const currentYear = new Date().getFullYear();

export const Footer: FC = () => {
  return (
    <footer className="bg-footer">
      <div className="mx-auto max-w-7xl px-4">
        <Logo color="black" />
        {/* content */}
        <div className="my-8 grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* column */}
          <div>
            <Heading
              as="h3"
              color="black"
              lineBottomSecondary
              className="mb-8 uppercase"
            >
              Contact
            </Heading>

            <a
              href="mailto:sac@wongames.com"
              className="mb-2 block text-sm text-gray hover:underline"
            >
              sac@wongames.com
            </a>
          </div>
          {/* column */}
          <div aria-label="social-media">
            <Heading
              as="h3"
              color="black"
              lineBottomSecondary
              className="mb-8 uppercase"
            >
              Follow us
            </Heading>

            <nav>
              <a
                href="https://www.instagram.com/won-games"
                target="_blank"
                rel="noopenner, noreferrer"
                className="mb-2 block text-sm text-gray hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://www.x.com/won-games"
                target="_blank"
                rel="noopenner, noreferrer"
                className="mb-2 block text-sm text-gray hover:underline"
              >
                X
              </a>
              <a
                href="https://www.youtube.com/won-games"
                target="_blank"
                rel="noopenner, noreferrer"
                className="mb-2 block text-sm text-gray hover:underline"
              >
                Youtube
              </a>
              <a
                href="https://www.facebook.com/won-games"
                target="_blank"
                rel="noopenner, noreferrer"
                className="mb-2 block text-sm text-gray hover:underline"
              >
                Facebook
              </a>
            </nav>
          </div>
          {/* column */}
          <div aria-labelledby="resources">
            <Heading
              as="h3"
              color="black"
              lineBottomSecondary
              className="mb-8 uppercase"
            >
              Links
            </Heading>

            <nav>
              <Link
                href="/"
                className="mb-2 block text-sm text-gray hover:underline"
              >
                Home
              </Link>
              <Link
                href="/games"
                className="mb-2 block text-sm text-gray hover:underline"
              >
                Store
              </Link>
              <Link
                href="/search"
                className="mb-2 block text-sm text-gray hover:underline"
              >
                Search
              </Link>
            </nav>
          </div>
          {/* column */}
          <div aria-label="contact">
            <Heading
              as="h3"
              color="black"
              lineBottomSecondary
              className="mb-8 uppercase"
            >
              Location
            </Heading>

            <span className="mb-2 block text-sm text-gray">
              Lorem ipsum dolor sit.
            </span>
            <span className="mb-2 block text-sm text-gray">Lorem Ipsum</span>
            <span className="mb-2 block text-sm text-gray">
              Lorem, ipsum dolor.
            </span>
          </div>
        </div>
        {/* copyright */}
        <div className="font-xs mb-8 mt-12 text-center text-gray">
          Won Games {currentYear} © All rights reserved.
        </div>
      </div>
    </footer>
  );
};
