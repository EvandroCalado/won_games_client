import { render } from '@testing-library/react';
import { Container } from '.';

describe('Container', () => {
  it('should render a heading', () => {
    const { container } = render(<Container>container</Container>);

    expect(container.firstChild).toHaveClass('mx-auto max-w-7xl px-4');
  });

  it('should render a snapshot', () => {
    const { container } = render(<Container>container</Container>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
