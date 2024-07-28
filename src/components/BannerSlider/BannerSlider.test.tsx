import { render, screen } from '@testing-library/react';
import { BannerSlider } from '.';
import { mock } from './mock';

describe('BannerSlider', () => {
  it('should render a vertical slider', () => {
    const { container } = render(<BannerSlider items={mock} />);

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument();
  });

  it('should render with one active item', () => {
    const { container } = render(<BannerSlider items={mock} />);

    expect(container.querySelectorAll('.slick-vertical')).toHaveLength(1);
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1);
    expect(
      screen.getByRole('heading', { name: /defy death 1/i, hidden: false }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /defy death 2/i, hidden: true }),
    ).toBeInTheDocument();
  });

  it('should render with dots', () => {
    const { container } = render(<BannerSlider items={mock} />);

    expect(container.querySelector('.slick-dots')).toBeInTheDocument();
  });
});
