import { fireEvent, render, screen } from '@testing-library/react';
import { GameCard } from '.';

const props = {
  title: 'Population Zero',
  developer: 'Other Ocean',
  img: '/img/card-image.png',
  price: 215,
};

describe('GameCard', () => {
  it('should render a heading', () => {
    render(<GameCard {...props} />);
    expect(
      screen.getByRole('heading', { level: 3, name: /population zero/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 5, name: /other ocean/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /population zero/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /add to wishlist/i }),
    ).toBeInTheDocument();
  });

  it('should render price in label', () => {
    render(<GameCard {...props} />);
    const price = screen.getByText('$215.00');

    expect(price).not.toHaveClass('text-gray line-through');
    expect(price).toHaveClass('bg-secondary text-white');
  });

  it('should render a promotional price in label', () => {
    render(<GameCard {...props} promotionalPrice={200} />);
    const price = screen.getByText('$215.00');
    const promotionalPrice = screen.getByText('$200.00');

    expect(price).toHaveClass('text-gray line-through');
    expect(promotionalPrice).toHaveClass('bg-secondary text-white');
    expect(promotionalPrice).not.toHaveClass('text-gray line-through');
  });

  it('should call onFav method when favorite is', () => {
    render(<GameCard {...props} favorite />);

    expect(screen.getByLabelText(/remove from wishlist/i)).toHaveAttribute(
      'fill',
      'currentColor',
    );
  });

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn();

    render(<GameCard {...props} onFav={onFav} />);

    const button = screen.getAllByRole('button')[0];

    fireEvent.click(button);

    expect(onFav).toHaveBeenCalled();
  });

  it('should render a corner render', () => {
    render(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="sm"
      />,
    );
    const ribbon = screen.getByText(/my ribbon/i);

    expect(ribbon).toHaveClass('bg-secondary');
  });
});
