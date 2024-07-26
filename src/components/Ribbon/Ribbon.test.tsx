import { render, screen } from '@testing-library/react';
import { Ribbon } from '.';

describe('Ribbon', () => {
  it('should render the children text correctly', () => {
    render(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toBeInTheDocument();
  });

  it('should render with primary color', () => {
    render(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toHaveClass('bg-red');
  });

  it('should render with secondary color', () => {
    render(<Ribbon color="secondary">Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toHaveClass('bg-secondary');
  });

  it('should render with size by default', () => {
    render(<Ribbon>Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toHaveClass('h-9 text-sm');
  });

  it('should render with size small', () => {
    render(<Ribbon size="sm">Best Seller</Ribbon>);

    expect(screen.getByText(/best seller/i)).toHaveClass('h-6 text-xs');
  });
});
