import { RibbonColor, RibbonSize } from '@/components';
import { mock as Slides } from '@/components/GameCardSlider/mock';
import { mock as Highlight } from '@/components/Highlight/mock';
import { GET_HOME } from '@/graphql/queries';
import { getClient } from '@/lib/client';
import { Home } from '@/templates';

const HomePage = async () => {
  const { data } = await getClient().query({
    query: GET_HOME,
  });

  const banners = data.banners.data.map((banner) => ({
    img: banner.attributes.image.data.attributes.url,
    title: banner.attributes.title,
    subtitle: banner.attributes.subtitle,
    buttonLabel: banner.attributes.button?.label,
    buttonLink: banner.attributes.button?.link,
    ribbon: banner.attributes.ribbon?.text,
    ribbonColor: banner.attributes.ribbon?.color as RibbonColor,
    ribbonSize: banner.attributes.ribbon?.size as RibbonSize,
  }));

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
