import { render, screen } from '@testing-library/react';
import { Banner } from '.';

const props = {
  img: 'https://upload.wikimedia.org/wikipedia/en/0/08/Crashlands.jpg',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
};

describe('Banner', () => {
  it('should render a heading', () => {
    render(<Banner {...props} />);

    expect(
      screen.getByRole('heading', { name: /defy death/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /play the new/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: /defy death/i }),
    ).toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = render(<Banner {...props} />);

    expect(container.firstChild).toBeInTheDocument();
  });
});
