import { Heading, Logo } from '@/components';
import { FC, ReactNode } from 'react';

export type AuthProps = {
  title: string;
  children: ReactNode;
};

export const Auth: FC<AuthProps> = ({ title, children }) => {
  return (
    <div className="grid h-screen grid-cols-2">
      {/* banner block */}
      <div
        style={{ backgroundImage: "url('/img/auth-bg.jpg')" }}
        className="relative hidden flex-col items-center justify-center bg-cover bg-center after:absolute after:h-full after:w-full after:bg-black/60 md:flex"
      >
        <div className="relative z-10 flex h-full w-full flex-col justify-between px-12 py-8">
          <Logo />

          <div className="space-y-4">
            <Heading as="h2" size="4xl" className="font-bold">
              All your favorite games in one place
            </Heading>
            <Heading as="h4" className="font-light">
              <strong className="font-bold text-primary">WON</strong> is the
              best and most complete gaming platform.
            </Heading>
          </div>

          <p className="text-center text-white">
            Won Games 2020 © Todos os Direitos Reservados
          </p>
        </div>
      </div>
      {/* form block */}
      <div className="flex flex-col items-center justify-center bg-white">
        <div className="w-80">
          <Logo color="black" size="large" className="mx-auto" />
          <Heading as="h1" color="black" lineLeft className="mb-8 mt-12">
            {title}
          </Heading>

          {/* form component */}
          {children}
        </div>
      </div>
    </div>
  );
};
