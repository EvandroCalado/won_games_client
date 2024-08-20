'use client';

import {
  Container,
  ExploreSidebar,
  GameCard,
  GameCardProps,
  ItemProps,
} from '@/components';
import { IconChevronDown } from '@tabler/icons-react';
import { FC } from 'react';
import { Base } from '../Base';

export type GamesProps = {
  games?: GameCardProps[];
  filterItems: ItemProps[];
};

export const Games: FC<GamesProps> = ({ games = [], filterItems }) => {
  const handleFilter = () => {
    return;
  };

  const handleShowMore = () => {
    return;
  };

  return (
    <Base>
      <Container className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-16 lg:grid-cols-4">
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <div className="grid h-max grid-cols-1 gap-4 md:col-span-2 md:grid-cols-1 lg:col-span-3 lg:grid-cols-2 xl:grid-cols-3">
          {games.map((game, index) => (
            <GameCard key={game.title + index} {...game} />
          ))}

          <button
            onClick={handleShowMore}
            className="mt-8 flex flex-col items-center justify-center text-center lg:col-span-2 xl:col-span-3"
          >
            <p className="font-semibold uppercase text-white">Show more</p>
            <IconChevronDown className="text-primary" size={32} />
          </button>
        </div>
      </Container>
    </Base>
  );
};
