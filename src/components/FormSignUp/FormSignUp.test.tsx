import { render, screen } from '@testing-library/react';
import { FormSignUp } from '.';

describe('FormSignIn', () => {
  it('should render the form', () => {
    render(<FormSignUp />);

    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign up now/i }),
    ).toBeInTheDocument();
  });

  it('should render sign up and don’t have an account', () => {
    render(<FormSignUp />);

    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument();
    expect(screen.getByText(/Already have an account?/i)).toBeInTheDocument();
  });
});
