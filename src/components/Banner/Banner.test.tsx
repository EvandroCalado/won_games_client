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

  it('should render a corner ribbon', () => {
    render(<Banner {...props} ribbon="My ribbon" ribbonSize="md" />);

    expect(screen.getByText(/my ribbon/i)).toBeInTheDocument();
    expect(screen.getByText(/my ribbon/i)).toHaveClass('bg-red h-9 text-sm');
  });

  it('should render a corner ribbon with primary color and small size', () => {
    render(
      <Banner
        {...props}
        ribbon="My ribbon"
        ribbonSize="sm"
        ribbonColor="secondary"
      />,
    );

    expect(screen.getByText(/my ribbon/i)).toBeInTheDocument();
    expect(screen.getByText(/my ribbon/i)).toHaveClass(
      'bg-secondary h-6 text-xs',
    );
  });

  it('should render a snapshot', () => {
    const { container } = render(<Banner {...props} />);

    expect(container.firstChild).toBeInTheDocument();
  });
});
