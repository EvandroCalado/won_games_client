import {
  BannerProps,
  BannerSlider,
  Container,
  Footer,
  GameCardProps,
  HighlightProps,
  Menu,
  Showcase,
} from '@/components';
import { FC } from 'react';

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
    <main>
      <Menu />

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

      <Footer />
    </main>
  );
};
