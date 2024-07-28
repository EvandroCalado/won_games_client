import { render } from '@testing-library/react';
import { GameCardSlider } from '.';
import { mock } from './mock';

describe('GameCardSlider', () => {
  it('should render with 4 active items', () => {
    const { container } = render(<GameCardSlider items={mock} />);

    expect(container.querySelectorAll('.slick-active')).toHaveLength(4);
  });
});
