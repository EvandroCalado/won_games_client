import { mock as galleryMock } from '@/components/Gallery/mock';
import { mock as gameMock } from '@/components/GameCardSlider/mock';
import { mock as detailsMock } from '@/components/GameDetails/mock';
import { mock as gameInfoMock } from '@/components/GameInfo/mock';
import { mock as highlightMock } from '@/components/Highlight/mock';
import { render, screen } from '@testing-library/react';
import { Game, GameProps } from './Game';

const props: GameProps = {
  cover: 'bg-image.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: 'Description',
  details: detailsMock,
  upcomingTitle: 'Upcoming games',
  upcomingGames: gameMock,
  upcomingHighlight: highlightMock,
  recommendedTitle: 'You may like these games',
  recommendedGames: gameMock,
};

jest.mock('@/templates/Base', () => ({
  __esModule: true,
  Base: function mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>;
  },
}));

jest.mock('@/components/Gallery', () => ({
  __esModule: true,
  Gallery: function mock() {
    return <div data-testid="Mock Gallery" />;
  },
}));

jest.mock('@/components/GameDetails', () => ({
  __esModule: true,
  GameDetails: function mock() {
    return <div data-testid="Mock GameDetails" />;
  },
}));

jest.mock('@/components/GameInfo', () => ({
  __esModule: true,
  GameInfo: function mock() {
    return <div data-testid="Mock GameInfo" />;
  },
}));

jest.mock('@/components/Showcase', () => ({
  __esModule: true,
  Showcase: function mock() {
    return <div data-testid="Mock Showcase" />;
  },
}));

describe('Game', () => {
  it('should render with components', () => {
    render(<Game {...props} />);

    expect(screen.getByTestId('Mock Base')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument();
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument();
    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2);
  });

  it('should render without gallery whrn gallery is undefined', () => {
    render(<Game {...props} gallery={undefined} />);

    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument();
  });

  it('should render without gallery on mobile', () => {
    render(<Game {...props} />);

    expect(screen.getByTestId('Mock Gallery')?.parentElement).toHaveClass(
      'max-md:hidden',
    );
  });

  it('should render cover image', () => {
    render(<Game {...props} />);

    expect(screen.getByRole('img', { name: /cover/i })).toHaveStyle({
      backgroundImage: `url(${props.cover})`,
    });
  });
});
