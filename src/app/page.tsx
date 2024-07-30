import { mock as banners } from '@/components/BannerSlider/mock';
import { mock as Slides } from '@/components/GameCardSlider/mock';
import { mock as Highlight } from '@/components/Highlight/mock';
import { Home } from '@/templates';

const HomePage = () => {
  return (
    <Home
      banners={banners}
      newGames={Slides}
      mostPopularHighlight={Highlight}
      mostPopularGames={Slides}
      upComingHighlight={Highlight}
      upComingGames={Slides}
      upComingMoreGames={Slides}
      freeHighlight={Highlight}
      freeGames={Slides}
    />
  );
};

export default HomePage;
