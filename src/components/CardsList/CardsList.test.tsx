import { render, screen } from '@testing-library/react';
import { CardsList } from '.';
import { mock } from '../PaymentOptions/mock';

describe('CardsList', () => {
  it('should render card list', () => {
    render(<CardsList cards={mock} />);

    expect(
      screen.getByRole('heading', { name: /my cards/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /visa/i })).toBeInTheDocument();
    expect(screen.getByText(/4325/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /master/i })).toBeInTheDocument();
    expect(screen.getByText(/4326/i)).toBeInTheDocument();
  });
});
