import { render, screen } from '@testing-library/react';
import { PurchaseInfo } from '.';

describe('PurchaseInfo', () => {
  it('should render a heading', () => {
    render(<PurchaseInfo />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(
      screen.getByText(/Your purchase is protected by/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/After making the purchase you are entitled/i),
    ).toBeInTheDocument();
  });
});
