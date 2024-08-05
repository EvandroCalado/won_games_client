import { render, screen } from '@testing-library/react';
import { GameInfo } from '.';

const props = {
  title: 'GameInfo',
  description: 'Description',
  price: 210,
};

describe('GameInfo', () => {
  it('should render title, description and price', () => {
    render(<GameInfo {...props} />);

    expect(
      screen.getByRole('heading', { level: 2, name: /gameinfo/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/description/i)).toBeInTheDocument();
    expect(screen.getByText(/210/i)).toBeInTheDocument();
  });

  it('should render buttons', () => {
    render(<GameInfo {...props} />);

    expect(
      screen.getByRole('button', { name: /add to cart/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /wishlist/i }),
    ).toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = render(<GameInfo {...props} />);

    expect(container).toMatchSnapshot();
  });
});
