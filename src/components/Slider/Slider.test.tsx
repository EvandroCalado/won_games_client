import { render, screen } from '@testing-library/react';
import { Slider } from '.';

describe('Slider', () => {
  it('should render children as slider item', () => {
    render(
      <Slider settings={{ slidesToShow: 1, infinite: false }}>
        <p>item1</p>
        <p>item2</p>
      </Slider>,
    );

    expect(screen.getByText(/item1/i).parentElement?.parentElement).toHaveClass(
      'slick-slide',
    );
    expect(screen.getByText(/item2/i).parentElement?.parentElement).toHaveClass(
      'slick-slide',
    );
  });

  it('should render a snapshot', () => {
    const { container } = render(
      <Slider settings={{ slidesToShow: 1, infinite: false }}>
        <p>item1</p>
        <p>item2</p>
      </Slider>,
    );

    expect(container).toMatchSnapshot();
  });
});
