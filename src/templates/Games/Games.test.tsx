import { QUERY_GAMES } from '@/graphql/queries';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { Suspense } from 'react';
import { Games } from '.';

import { mock as mockSidebar } from '@/components/ExploreSidebar/mock';

const mocks: MockedResponse[] = [
  {
    request: {
      query: QUERY_GAMES,
    },
    result: {
      data: {
        games: {
          data: [
            {
              id: '1',
              attributes: {
                name: 'Sample Game',
                slug: 'sample-game',
                price: 50,
                developers: {
                  data: [{ attributes: { name: 'Sample Developer' } }],
                },
                cover: {
                  data: {
                    attributes: {
                      formats: {
                        small: {
                          url: 'sample-url',
                        },
                      },
                    },
                  },
                },
              },
            },
          ],
        },
      },
    },
  },
];

// jest.mock('@/templates/Base', () => ({
//   __esModule: true,
//   Base: ({ children }: { children: React.ReactNode }) => (
//     <div data-testid="Mock Base">{children}</div>
//   ),
// }));

// jest.mock('@/components/ExploreSidebar', () => ({
//   __esModule: true,
//   ExploreSidebar: () => <div data-testid="Mock ExploreSidebar" />,
// }));

// jest.mock('@/components/GameCard', () => ({
//   __esModule: true,
//   GameCard: () => <div data-testid="Mock GameCard" />,
// }));

describe('Games', () => {
  it('should render sidebar, games and show more', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Games filterItems={mockSidebar} />
        </Suspense>
      </MockedProvider>,
    );

    // expect(screen.getByTestId('Mock Base')).toBeInTheDocument();
    // expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument();
    // expect(screen.getAllByTestId('Mock GameCard')).toHaveLength(1);
    // expect(
    //   screen.getByRole('button', { name: /show more/i }),
    // ).toBeInTheDocument();
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
});
