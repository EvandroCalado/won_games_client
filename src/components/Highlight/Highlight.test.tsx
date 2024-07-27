import { render, screen } from '@testing-library/react';
import { Highlight } from '.';

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death',
  backgroundImage: '/img/red-dead-img.jpg',
};

describe('Highlight', () => {
  it('should render headings and button', () => {
    render(<Highlight {...props} />);

    expect(
      screen.getByRole('heading', { name: /heading 1/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/games/defy-death',
    );
  });

  it('should render background image', () => {
    const { container } = render(<Highlight {...props} />);

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`,
    });
  });

  it('should render float image', () => {
    render(<Highlight {...props} floatImage="/float-image.png" />);

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/_next/image?url=%2Ffloat-image.png&w=3840&q=75',
    );
  });

  it('should render align right by default', () => {
    render(<Highlight {...props} floatImage="/float-image.png" />);

    expect(
      screen.getByRole('img', { name: props.title }).parentElement,
    ).not.toHaveClass('order-last');
  });

  it('should render align left', () => {
    render(
      <Highlight {...props} floatImage="/float-image.png" alignment="left" />,
    );

    expect(
      screen.getByRole('img', { name: props.title }).parentElement,
    ).toHaveClass('order-last');
  });

  it('should render a snapshot', () => {
    const { container } = render(
      <Highlight {...props} floatImage="/float-image.png" />,
    );

    expect(container).toMatchSnapshot();
  });
});
