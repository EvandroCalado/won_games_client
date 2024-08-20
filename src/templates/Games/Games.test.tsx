import { render, screen } from '@testing-library/react';
import { Games } from '.';

import { mock as mockSidebar } from '@/components/ExploreSidebar/mock';
import { mock as mockGames } from '@/components/GameCardSlider/mock';

jest.mock('@/templates/Base', () => ({
  __esModule: true,
  Base: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="Mock Base">{children}</div>
  ),
}));

jest.mock('@/components/ExploreSidebar', () => ({
  __esModule: true,
  ExploreSidebar: () => <div data-testid="Mock ExploreSidebar" />,
}));

jest.mock('@/components/GameCard', () => ({
  __esModule: true,
  GameCard: () => <div data-testid="Mock GameCard" />,
}));

describe('Games', () => {
  it('should render sidebar, games and show more', () => {
    render(<Games games={[mockGames[0]]} filterItems={mockSidebar} />);

    expect(screen.getByTestId('Mock Base')).toBeInTheDocument();
    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock GameCard')).toHaveLength(1);
    expect(
      screen.getByRole('button', { name: /show more/i }),
    ).toBeInTheDocument();
  });
});
