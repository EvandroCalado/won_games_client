import { render, screen } from '@testing-library/react';
import { Base } from '.';

jest.mock('@/components/Menu', () => {
  return {
    __esModule: true,
    Menu: function Mock() {
      return <div data-testid="Mock menu"></div>;
    },
  };
});

jest.mock('@/components/Footer', () => {
  return {
    __esModule: true,
    Footer: function Mock() {
      return <div data-testid="Mock footer"></div>;
    },
  };
});

describe('Base', () => {
  it('should render menu, footer and children', () => {
    render(
      <Base>
        <h1>Base</h1>
      </Base>,
    );

    expect(screen.getByTestId(/mock menu/i)).toBeInTheDocument();
    expect(screen.getByTestId(/mock footer/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /base/i })).toBeInTheDocument();
  });
});
