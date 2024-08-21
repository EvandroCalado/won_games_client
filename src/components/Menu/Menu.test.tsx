import { fireEvent, render, screen } from '@testing-library/react';
import { Menu } from '.';

describe('Menu', () => {
  it('should render menu', () => {
    render(<Menu />);

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/won games/i)).toBeInTheDocument();
  });

  it('should handle open/close mobile menu', () => {
    render(<Menu />);

    const modalMenu = screen.getByRole('navigation', {
      hidden: true,
    });

    expect(modalMenu).toHaveAttribute('aria-hidden', 'true');
    expect(modalMenu).toHaveClass('opacity-0');

    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(modalMenu).toHaveAttribute('aria-hidden', 'false');
    expect(modalMenu).toHaveClass('opacity-100');

    fireEvent.click(screen.getByLabelText(/close menu/i));
    expect(modalMenu).toHaveAttribute('aria-hidden', 'true');
    expect(modalMenu).toHaveClass('opacity-0');
  });

  it('should show login or sign up buttons when user is logged out', () => {
    render(<Menu />);

    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument();
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
  });

  it('should not show login or sign up buttons when user is logged in', () => {
    render(<Menu username="johndoe" />);

    expect(screen.queryByText(/log in now/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument();
  });
});
