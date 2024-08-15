import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PaymentOptions } from '.';
import { mock } from './mock';

describe('PaymentOptions', () => {
  it('should render a cards and add new card', () => {
    render(<PaymentOptions cards={mock} handlePayment={jest.fn} />);

    expect(screen.getByText(/4325/i)).toBeInTheDocument();
    expect(screen.getByText(/4326/i)).toBeInTheDocument();
    expect(screen.getByText(/add a new credit card/i)).toBeInTheDocument();
  });

  it('should render select card by the label', async () => {
    render(<PaymentOptions cards={mock} handlePayment={jest.fn} />);

    userEvent.click(screen.getByLabelText(/4325/i));

    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4325/i })).toBeChecked();
    });
  });

  it('should render disdabled button buy now by default', () => {
    const handlePayment = jest.fn();

    render(<PaymentOptions cards={mock} handlePayment={handlePayment} />);

    userEvent.click(screen.getByRole('button', { name: /buy now/i }));

    expect(handlePayment).not.toHaveBeenCalled();
  });

  it('should call handlePayment when buy now is clicked', async () => {
    const handlePayment = jest.fn();

    render(<PaymentOptions cards={mock} handlePayment={handlePayment} />);

    userEvent.click(screen.getByLabelText(/4325/i));

    userEvent.click(screen.getByRole('button', { name: /buy now/i }));

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled();
    });
  });
});
