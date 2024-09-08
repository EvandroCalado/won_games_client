import {
  Container,
  Gallery,
  GalleryItemProps,
  GameCardProps,
  GameDetails,
  GameInfo,
  GameInfoProps,
  HighlightProps,
  Separator,
  Showcase,
  TextContent,
} from '@/components';
import { GameDetailsProps } from '@/components/GameDetails';
import { FC } from 'react';
import { Base } from '../Base';

export type GameProps = {
  cover: string;
  gameInfo: GameInfoProps;
  gallery?: GalleryItemProps[];
  description: string;
  details: GameDetailsProps;
  upcomingTitle: string;
  upcomingGames: GameCardProps[];
  upcomingHighlight: HighlightProps;
  recommendedTitle: string;
  recommendedGames: GameCardProps[];
};

export const Game: FC<GameProps> = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingTitle,
  upcomingGames,
  upcomingHighlight,
  recommendedTitle,
  recommendedGames,
}) => {
  return (
    <Base>
      {/* bg cover */}
      <div
        role="img"
        aria-label="cover"
        style={{ backgroundImage: `url(${cover})` }}
        className="absolute top-0 z-[-1] h-96 w-full bg-cover bg-top bg-no-repeat opacity-[0.4] [clip-path:_polygon(0_0,100%_0,100%_100%,0_85%)] md:h-[700px]"
      />

      {/* game info  */}
      <Container className="mt-20 md:mt-80">
        <GameInfo {...gameInfo} />
      </Container>

      {/* gallery */}
      <Container className="max-md:hidden">
        {!!gallery && <Gallery items={gallery} />}
      </Container>

      {/* text content */}
      <Container>
        <TextContent title={gameInfo.title} content={description} />
      </Container>

      {/* game details */}
      <Container>
        <GameDetails {...details} />
      </Container>

      {/* separator */}
      <Separator />

      {/* showcases */}
      <Showcase
        title={upcomingTitle}
        games={upcomingGames}
        highlight={upcomingHighlight}
      />
      <Showcase title={recommendedTitle} games={recommendedGames} />
    </Base>
  );
};
