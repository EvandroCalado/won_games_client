import { render, screen } from '@testing-library/react';
import { Profile } from '.';

jest.mock('next/navigation', () => ({
  usePathname: () => '/profile/me',
}));

jest.mock('@/templates/Base', () => ({
  __esModule: true,
  Base: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="Mock Base">{children}</div>
  ),
}));

jest.mock('@/components/Heading', () => ({
  __esModule: true,
  Heading: ({ children }: { children: React.ReactNode }) => (
    <h2 data-testid="Mock Heading">{children}</h2>
  ),
}));

jest.mock('@/components/ProfileMenu', () => ({
  __esModule: true,
  ProfileMenu: () => <div data-testid="Mock ProfileMenu" />,
}));

describe('Profile', () => {
  it('should render by default', () => {
    render(<Profile>profile</Profile>);

    expect(screen.getByText('profile')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /my profile/i }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument();
  });
});
