import { mock as banners } from '@/components/BannerSlider/mock';
import { mock as Slides } from '@/components/GameCardSlider/mock';
import { mock as Highlight } from '@/components/Highlight/mock';
import { render, screen } from '@testing-library/react';
import { Home } from '.';

const props = {
  banners: banners,
  newGames: [Slides[0]],
  mostPopularHighlight: Highlight,
  mostPopularGames: [Slides[0]],
  upComingHighlight: Highlight,
  upComingGames: [Slides[0]],
  upComingMoreGames: [Slides[0]],
  freeHighlight: Highlight,
  freeGames: [Slides[0]],
};

jest.mock('@/components/Menu', () => {
  return {
    __esModule: true,
    Menu: function Mock() {
      return <div data-testid="Mock menu"></div>;
    },
  };
});

jest.mock('@/components/Footer', () => {
  return {
    __esModule: true,
    Footer: function Mock() {
      return <div data-testid="Mock footer"></div>;
    },
  };
});

jest.mock('@/components/Showcase', () => {
  return {
    __esModule: true,
    Showcase: function Mock() {
      return <div data-testid="Mock showcase"></div>;
    },
  };
});

jest.mock('@/components/BannerSlider', () => {
  return {
    __esModule: true,
    BannerSlider: function Mock() {
      return <div data-testid="Mock bannerSlider"></div>;
    },
  };
});

describe('Home', () => {
  it('should render header and footer', () => {
    render(<Home {...props} />);

    expect(screen.getByTestId(/mock menu/i)).toBeInTheDocument();
    expect(screen.getByTestId(/mock bannerSlider/i)).toBeInTheDocument();
    expect(screen.getByTestId(/mock footer/i)).toBeInTheDocument();
    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(5);
  });
});
