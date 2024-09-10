import { render, screen } from '@testing-library/react';
import { Loader } from '.';

describe('Loader', () => {
  it('should render a heading', () => {
    render(<Loader />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
