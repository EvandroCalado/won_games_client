import { mock as recommendedMock } from '@/components/GameCardSlider/mock';
import { mock as highlightMock } from '@/components/Highlight/mock';
import { render, screen } from '@testing-library/react';
import { Wishlist } from '.';

const props = {
  games: recommendedMock,
  recommendedGames: recommendedMock,
  recommendedHighlight: highlightMock,
};

jest.mock('@/components/Showcase', () => {
  return {
    __esModule: true,
    Showcase: function Mock() {
      return <div data-testid="Mock Showcase"></div>;
    },
  };
});

describe('Wishlist', () => {
  it('should render heading and showcase', () => {
    render(<Wishlist {...props} />);

    expect(
      screen.getByRole('heading', { name: /wishlist/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/population zero/i)).toHaveLength(6);
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument();
  });

  it('should render empty list when no games', () => {
    render(<Wishlist {...props} games={undefined} />);

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i }),
    ).toBeInTheDocument();
  });
});
