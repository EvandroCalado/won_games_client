import { render, screen } from '@testing-library/react';
import { ProfileMenu } from '.';

describe('ProfileMenu', () => {
  it('should render links and icons', () => {
    render(<ProfileMenu />);

    expect(screen.getAllByRole('link')).toHaveLength(4);
    expect(screen.getAllByRole('img')).toHaveLength(4);
  });

  it('should render a active links', () => {
    const { rerender } = render(<ProfileMenu />);

    expect(screen.getByRole('link', { name: /my profile/i })).toHaveClass(
      'bg-primary text-white',
    );

    rerender(<ProfileMenu activeLink="/profile/cards" />);
    expect(screen.getByRole('link', { name: /my cards/i })).toHaveClass(
      'bg-primary text-white',
    );

    rerender(<ProfileMenu activeLink="/profile/orders" />);
    expect(screen.getByRole('link', { name: /my orders/i })).toHaveClass(
      'bg-primary text-white',
    );
  });
});
