import {
  Container,
  Empty,
  GameCard,
  GameCardProps,
  Heading,
  HighlightProps,
  Separator,
  Showcase,
} from '@/components';
import { FC } from 'react';
import { Base } from '../Base';

export type WishlistProps = {
  games?: GameCardProps[];
  recommendedTitle: string;
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
};

export const Wishlist: FC<WishlistProps> = ({
  games = [],
  recommendedTitle,
  recommendedGames,
  recommendedHighlight,
}) => {
  return (
    <Base>
      {/* wishlist */}
      <Container>
        <Heading lineLeft>Wishlist</Heading>
        {games.length ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {games.map((game, index) => (
              <GameCard {...game} key={index} />
            ))}
          </div>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
            hasLink
          />
        )}
      </Container>

      {/* separator */}
      <Separator />

      {/* showcase */}
      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
};
