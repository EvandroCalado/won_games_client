import { render, screen } from '@testing-library/react';
import { FormProfile } from '.';

describe('FormProfile', () => {
  it('should render a heading', () => {
    render(<FormProfile />);

    expect(
      screen.getByRole('heading', { name: /my profile/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('New password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
  });
});
