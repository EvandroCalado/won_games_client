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

describe('Home', () => {
  it('should render header and footer', () => {
    render(<Home {...props} />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /contact/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /News/i, level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Most popular/i, level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Up coming/i, level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Free games/i, level: 2 }),
    ).toBeInTheDocument();

    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1);
    expect(screen.getAllByText(/population zero/i)).toHaveLength(5);
    expect(screen.getAllByText(/read dead/i)).toHaveLength(3);
  });
});
