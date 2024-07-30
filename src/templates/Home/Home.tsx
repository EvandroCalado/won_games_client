import {
  BannerProps,
  BannerSlider,
  Container,
  Footer,
  GameCardProps,
  GameCardSlider,
  Heading,
  Highlight,
  HighlightProps,
  Menu,
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

      <section className="section-white">
        <Container>
          <Heading lineLeft color="black" className="mb-8">
            News
          </Heading>
          <GameCardSlider items={newGames} color="black" />
        </Container>
      </section>

      <Container>
        <Heading lineLeft className="mb-8">
          Most popular
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} />
      </Container>

      <Container>
        <Heading lineLeft className="mb-8">
          Up coming
        </Heading>
        <GameCardSlider items={upComingGames} />
        <Highlight {...upComingHighlight} alignment="left" />
        <GameCardSlider items={upComingMoreGames} />
      </Container>

      <Container>
        <Heading lineLeft className="mb-8">
          Free games
        </Heading>
        <Highlight {...freeHighlight} />
        <GameCardSlider items={freeGames} />
      </Container>

      <Footer />
    </main>
  );
};
