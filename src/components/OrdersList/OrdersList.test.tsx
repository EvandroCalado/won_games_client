import { render, screen } from '@testing-library/react';
import { OrdersList } from '.';
import { mock } from './mock';

jest.mock('@/components/GameItem', () => ({
  __esModule: true,
  GameItem: () => <div data-testid="Mock GameItem"></div>,
}));

jest.mock('@/components/Empty', () => ({
  __esModule: true,
  Empty: () => <div data-testid="Mock Empty"></div>,
}));

describe('OrdersList', () => {
  it('should render a heading and game list', () => {
    render(<OrdersList items={mock} />);

    expect(
      screen.getByRole('heading', { name: /my orders/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2);
  });

  it('should render a empty list', () => {
    render(<OrdersList />);

    expect(screen.queryAllByTestId('Mock GameItem')).toHaveLength(0);
    expect(screen.queryByTestId('Mock GameItem')).not.toBeInTheDocument();
  });
});
