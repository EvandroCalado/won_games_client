import { render, screen } from '@testing-library/react';
import { FormSignIn } from '.';

describe('FormSignIn', () => {
  it('should render the form', () => {
    render(<FormSignIn />);

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign in now/i }),
    ).toBeInTheDocument();
  });

  it('should render forgot password', () => {
    render(<FormSignIn />);

    expect(
      screen.getByRole('link', { name: /forgot your password\?/i }),
    ).toBeInTheDocument();
  });

  it('should render sign up and don’t have an account', () => {
    render(<FormSignIn />);

    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument();
    expect(screen.getByText(/don’t have an account/i)).toBeInTheDocument();
  });
});
