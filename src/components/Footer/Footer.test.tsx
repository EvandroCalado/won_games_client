import { render, screen } from '@testing-library/react';
import { Footer } from '.';

describe('Footer', () => {
  it('should render 4 columns on the footer', () => {
    render(<Footer />);

    expect(
      screen.getByRole('heading', { name: /contact/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /follow us/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /location/i }),
    ).toBeInTheDocument();
  });

  it('should render a footer snapshot', () => {
    const { container } = render(<Footer />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
