'use client';

import {
  Container,
  ExploreSidebar,
  GameCard,
  ItemProps,
  Loader,
} from '@/components';
import { QUERY_GAMES } from '@/graphql/queries';
import { useSuspenseQuery } from '@apollo/client';
import { IconChevronDown } from '@tabler/icons-react';
import { FC, useTransition } from 'react';
import { Base } from '../Base';

export type GamesProps = {
  filterItems: ItemProps[];
};

export const Games: FC<GamesProps> = ({ filterItems }) => {
  const [isPending, startTransition] = useTransition();
  const { data, fetchMore } = useSuspenseQuery(QUERY_GAMES);

  if (!data) {
    return <Loader />;
  }

  const games = data.games.data.map((game) => ({
    id: game.id,
    title: game.attributes.name,
    slug: game.attributes.slug,
    developer: game.attributes.developers.data[0].attributes.name,
    img: game.attributes.cover.data?.attributes.formats.small.url,
    price: game.attributes.price,
    promotionalPrice: game.attributes.price * 0.75,
  }));

  const totalGames = data.games.meta.pagination.total;
  const noMoreGames = games.length >= totalGames;

  const handleFilter = () => {
    return;
  };

  const handleShowMore = () => {
    startTransition(() => {
      fetchMore({
        variables: { start: games.length },
        updateQuery(previousQueryResult, options) {
          return {
            games: {
              ...previousQueryResult.games,
              data: [
                ...previousQueryResult.games.data,
                ...options.fetchMoreResult.games.data,
              ],
            },
          };
        },
      });
    });
  };

  return (
    <Base>
      <Container className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-16 lg:grid-cols-4">
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <div className="grid h-max grid-cols-1 gap-4 md:col-span-2 md:grid-cols-1 lg:col-span-3 lg:grid-cols-2 xl:grid-cols-3">
          {games?.map((game, index) => (
            <GameCard key={game.title + index} {...game} />
          ))}

          <button
            disabled={noMoreGames}
            onClick={handleShowMore}
            className={`${isPending ? 'pointer-events-none' : ''} mt-8 flex flex-col items-center justify-center text-center disabled:pointer-events-none lg:col-span-2 xl:col-span-3 [&>p]:hover:text-white/80 [&>p]:disabled:text-white/40 [&>svg]:hover:text-primary/80 [&>svg]:disabled:text-primary/40`}
          >
            {isPending ? (
              <p className="flex items-center gap-2 font-semibold uppercase text-white duration-150">
                Loading
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-primary border-l-transparent"></span>
              </p>
            ) : (
              <p className="font-semibold uppercase text-white duration-150">
                {noMoreGames ? 'No more games' : 'Show more'}
              </p>
            )}

            <IconChevronDown className="text-primary duration-150" size={32} />
          </button>
        </div>
      </Container>
    </Base>
  );
};
