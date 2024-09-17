import { mock as mockSidebar } from '@/components/ExploreSidebar/mock';
import { apolloCache } from '@/utils/apollo-cache';
import { MockedProvider } from '@apollo/client/testing';
import { fireEvent, render, screen } from '@testing-library/react';
import { Suspense } from 'react';
import { Games } from '.';
import { fetchMoreMock, gamesMock } from './mocks';

jest.mock('@/templates/Base', () => ({
  __esModule: true,
  Base: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="Mock Base">{children}</div>
  ),
}));

jest.mock('@/components/ExploreSidebar', () => ({
  __esModule: true,
  ExploreSidebar: () => <div data-testid="Mock ExploreSidebar" />,
}));

describe('Games', () => {
  it('should render loading', () => {
    render(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Suspense fallback="Loading...">
          <Games filterItems={mockSidebar} />
        </Suspense>
      </MockedProvider>,
    );

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it('should render sidebar, games and show more', async () => {
    render(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Suspense fallback="Loading...">
          <Games filterItems={mockSidebar} />
        </Suspense>
      </MockedProvider>,
    );

    // loading
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    // await render all component
    expect(await screen.findByTestId('Mock Base')).toBeInTheDocument();
    expect(
      await screen.findByTestId('Mock ExploreSidebar'),
    ).toBeInTheDocument();

    expect(screen.getByText(/Hitman: Blood Money/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /show more/i }),
    ).toBeInTheDocument();
  });

  it('should render more games when click show more', async () => {
    render(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Suspense fallback="Loading...">
          <Games filterItems={mockSidebar} />
        </Suspense>
      </MockedProvider>,
    );

    // await render all component
    expect(await screen.findByTestId('Mock Base')).toBeInTheDocument();
    expect(
      await screen.findByTestId('Mock ExploreSidebar'),
    ).toBeInTheDocument();

    expect(await screen.findByText(/Hitman: Blood Money/i)).toBeInTheDocument();

    screen.logTestingPlaygroundURL();

    // fetch more games
    const button = screen.getByRole('button', { name: /show more/i });
    fireEvent.click(button);

    expect(await screen.findByText(/bloodborne/i)).toBeInTheDocument();

    screen.logTestingPlaygroundURL();
  });
});
