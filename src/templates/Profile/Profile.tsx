'use client';

import { ActiveLinkProps, Container, Heading, ProfileMenu } from '@/components';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { Base } from '../Base';

export type ProfileProps = {
  children?: React.ReactNode;
};

export const Profile: FC<ProfileProps> = ({ children }) => {
  const router = usePathname() as ActiveLinkProps;

  return (
    <Base>
      <Container>
        <Heading lineLeft className="mb-8">
          My profile
        </Heading>

        <main className="grid grid-cols-1 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
          <ProfileMenu activeLink={router} />

          <div className="bg-white p-4 md:col-span-2 lg:col-span-3">
            {children}
          </div>
        </main>
      </Container>
    </Base>
  );
};
