import { render, screen } from '@testing-library/react';
import { CartIcon } from '.';

describe('CartIcon', () => {
  it('should render without badge', () => {
    render(<CartIcon />);

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
  });

  it('should render with badge', () => {
    render(<CartIcon quantity={3} />);

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument();
    expect(screen.getByText(/3/i)).toBeInTheDocument();
  });

  it('should not render badge with negative quantity', () => {
    render(<CartIcon quantity={-3} />);

    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/-3/i)).not.toBeInTheDocument();
  });
});
