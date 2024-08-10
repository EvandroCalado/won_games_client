import { render, screen } from '@testing-library/react';
import { Empty } from '.';

const props = {
  title: 'A simple title',
  description: 'Wanna play?',
  hasLink: true,
};

describe('Empty', () => {
  it('should render default', () => {
    render(<Empty {...props} />);

    expect(
      screen.getByRole('img', { name: /a gamer in a couch playng videogame/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /a simple title/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/wanna play?/i)).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /go back to store/i }),
    ).toHaveAttribute('href', '/');
  });

  it('should render without link when hasLink is false', () => {
    render(<Empty {...props} hasLink={false} />);

    expect(
      screen.queryByRole('link', { name: /go back to store/i }),
    ).not.toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = render(<Empty {...props} hasLink={false} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
