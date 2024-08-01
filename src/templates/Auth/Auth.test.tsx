import { render, screen } from '@testing-library/react';
import { Auth } from '.';

describe('Auth', () => {
  it('should render default components and children', () => {
    render(
      <Auth title="test">
        <input type="text" />
      </Auth>,
    );

    expect(screen.queryAllByRole('img', { name: 'Won Games' })).toHaveLength(2);
    expect(
      screen.getByRole('heading', { name: 'test', level: 1 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /is the best and most complete gaming platform/i,
        level: 4,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
