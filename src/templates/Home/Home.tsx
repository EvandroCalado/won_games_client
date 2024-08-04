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
  newGames: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upComingHighlight: HighlightProps;
  upComingGames: GameCardProps[];
  upComingMoreGames: GameCardProps[];
  freeHighlight: HighlightProps;
  freeGames: GameCardProps[];
};

export const Home: FC<HomeProps> = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upComingHighlight,
  upComingGames,
  upComingMoreGames,
  freeHighlight,
  freeGames,
}) => {
  return (
    <Base>
      <main>
        {/* banner */}
        <Container>
          <BannerSlider items={banners} />
        </Container>

        {/* news */}
        <Showcase title="News" games={newGames} isSectionWhite />

        {/* most popular */}
        <Showcase
          title="Most Popular"
          highlight={mostPopularHighlight}
          games={mostPopularGames}
        />

        {/* up comming     */}
        <Showcase title="Up coming" games={upComingGames} />
        <Showcase
          highlight={upComingHighlight}
          games={upComingMoreGames}
          alignment="left"
        />

        {/* free games */}
        <Showcase
          title="Free games"
          highlight={freeHighlight}
          games={freeGames}
        />
      </main>
    </Base>
  );
};
