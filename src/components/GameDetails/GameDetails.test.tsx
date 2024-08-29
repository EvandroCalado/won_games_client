import { render, screen } from '@testing-library/react';
import { GameDetails, GameDetailsProps } from '.';

const props: GameDetailsProps = {
  developer: 'Rockstar Games',
  platforms: ['windows', 'osx', 'linux'],
  publisher: '2k Games',
  releaseDate: '2024-11-21T18:30:00',
  rating: 'BR0',
  genres: ['Action', 'Adventure', 'Rpg'],
};

describe('GameDetails', () => {
  it('should render the blocks', () => {
    render(<GameDetails {...props} />);

    expect(
      screen.getByRole('heading', { level: 3, name: /developer/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /release date/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /platforms/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /publisher/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /rating/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /genres/i }),
    ).toBeInTheDocument();
  });

  it('should render the platform icons', () => {
    render(<GameDetails {...props} />);

    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /osx/i })).toBeInTheDocument();
  });
  it('should render the publisher ', () => {
    render(<GameDetails {...props} />);

    expect(screen.getByText(/2k games/i)).toBeInTheDocument();
  });

  it('should render the formated date', () => {
    render(<GameDetails {...props} />);

    expect(screen.getByText('Nov 21, 2024')).toBeInTheDocument();
  });

  it('should render free rating when BR0', () => {
    render(<GameDetails {...props} />);

    expect(screen.getByText(/free/i)).toBeInTheDocument();
  });

  it('should render 18+ rating when BR18', () => {
    render(<GameDetails {...props} rating="BR18" />);

    expect(screen.getByText(/18+/i)).toBeInTheDocument();
  });

  it('should render a list of genres', () => {
    render(<GameDetails {...props} />);

    expect(screen.getByText(/Rpg/i)).toBeInTheDocument();
  });
});
