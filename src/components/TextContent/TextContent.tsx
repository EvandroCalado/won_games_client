'use client';

import { FC } from 'react';
import { Heading } from '../Heading';

export type TextContentProps = {
  title?: string;
  content: string;
};

export const TextContent: FC<TextContentProps> = ({ title, content }) => {
  return (
    <div className="text-content text-white md:bg-white md:p-6 md:text-black">
      {!!title && (
        <Heading as="h1" lineLeft color="black">
          {title}
        </Heading>
      )}

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};
