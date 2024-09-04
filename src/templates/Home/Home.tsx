import {
  BannerProps,
  BannerSlider,
  Container,
  GameCardProps,
  HighlightProps,
  Showcase,
} from '@/components';
import { FC } from 'react';
import { Base } from '../Base';

export type HomeProps = {
  banners: BannerProps[];
  newGamesTitle: string;
  newGames: GameCardProps[];
  mostPopularGamesTitle: string;
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upComingGamesTitle: string;
  upComingHighlight: HighlightProps;
  upComingGames: GameCardProps[];
  freeGamesTitle: string;
  freeHighlight: HighlightProps;
  freeGames: GameCardProps[];
};

export const Home: FC<HomeProps> = ({
  banners,
  newGamesTitle,
  newGames,
  mostPopularGamesTitle,
  mostPopularHighlight,
  mostPopularGames,
  upComingGamesTitle,
  upComingHighlight,
  upComingGames,
  freeGamesTitle,
  freeHighlight,
  freeGames,
}) => {
  return (
    <Base>
      {/* banner */}
      <Container>
        <BannerSlider items={banners} />
      </Container>

      {/* news */}
      <Showcase title={newGamesTitle} games={newGames} isSectionWhite />

      {/* most popular */}
      <Showcase
        title={mostPopularGamesTitle}
        games={mostPopularGames}
        highlight={mostPopularHighlight}
      />

      {/* up comming     */}
      <Showcase
        title={upComingGamesTitle}
        games={upComingGames}
        highlight={upComingHighlight}
      />

      {/* free games */}
      <Showcase
        title={freeGamesTitle}
        games={freeGames}
        highlight={freeHighlight}
      />
    </Base>
  );
};
