import { render, screen } from '@testing-library/react';
import { CartList } from '.';
import { mock } from './mock';

describe('CartList', () => {
  it('should render a heading', () => {
    render(<CartList items={mock} total={470} />);

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(2);
    expect(screen.getByText('$470.00')).toBeInTheDocument();
  });

  it('should render the button', () => {
    render(<CartList items={mock} total={470} hasButton />);

    expect(
      screen.getByRole('button', { name: /buy it now/i }),
    ).toBeInTheDocument();
    expect(screen.queryByText('Total:')).not.toBeInTheDocument();
  });

  it('should render empty list', () => {
    render(<CartList />);

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument();
  });
});
