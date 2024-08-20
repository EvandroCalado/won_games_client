import { fireEvent, render, screen } from '@testing-library/react';
import { UserDropdown } from '.';

describe('UserDropdown', () => {
  it('should render the username', () => {
    render(<UserDropdown username="username" />);

    expect(screen.getByText(/username/i)).toBeInTheDocument();
  });

  it('should render the menu', () => {
    render(<UserDropdown username="username" />);

    fireEvent.click(screen.getByText(/username/i));

    expect(
      screen.getByRole('link', { name: /my profile/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument();
  });
});
