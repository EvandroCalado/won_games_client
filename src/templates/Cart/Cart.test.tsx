import { mock as CartListMock } from '@/components/CartList/mock';
import { mock as recommendedMock } from '@/components/GameCardSlider/mock';
import { mock as recommendedHighlightMock } from '@/components/Highlight/mock';
import { mock as PaymentOptionsMock } from '@/components/PaymentOptions/mock';
import { render, screen } from '@testing-library/react';
import { Cart } from '.';

const props = {
  items: CartListMock,
  total: 470,
  cards: PaymentOptionsMock,
  recommendedGames: recommendedMock,
  recommendedHighlight: recommendedHighlightMock,
};

jest.mock('@/templates/Base', () => ({
  __esModule: true,
  Base: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="Mock Base">{children}</div>
  ),
}));

jest.mock('@/components/Showcase', () => ({
  __esModule: true,
  Showcase: () => <div data-testid="Mock Showcase"></div>,
}));

jest.mock('@/components/CartList', () => ({
  __esModule: true,
  CartList: () => <div data-testid="Mock CartList"></div>,
}));

jest.mock('@/components/PaymentOptions', () => ({
  __esModule: true,
  PaymentOptions: function Mock() {
    return <div data-testid="Mock PaymentOptions"></div>;
  },
}));

jest.mock('@/components/Empty', () => ({
  __esModule: true,
  Empty: function Mock() {
    return <div data-testid="Mock Empty"></div>;
  },
}));

describe('Cart', () => {
  it('should render cart by default', () => {
    render(<Cart {...props} />);

    expect(
      screen.getByRole('heading', { name: /my cart/i }),
    ).toBeInTheDocument();
    expect(screen.getByTestId('Mock Base')).toBeInTheDocument();
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument();
    expect(screen.getByTestId('Mock CartList')).toBeInTheDocument();
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument();
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument();
  });

  it('should render a empty cart', () => {
    render(<Cart {...props} items={[]} />);

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument();
  });
});
