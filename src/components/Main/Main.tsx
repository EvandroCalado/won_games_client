import Image from 'next/image';
import { FC } from 'react';

export type MainProps = {
  title?: string;
};

export const Main: FC<MainProps> = ({
  title = 'Next Boilerplate Tailwind',
}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-8 bg-zinc-100 p-24 dark:bg-zinc-900">
      <h1 className="text-custom text-4xl font-bold">{title}</h1>

      <Image src="/logo.svg" alt="Logo" width={300} height={40} />
    </main>
  );
};
