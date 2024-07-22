import { render, screen } from '@testing-library/react';
import { Main } from '.';

describe('Main', () => {
  it('should render heading', () => {
    render(<Main />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('should render a snapshot', () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
