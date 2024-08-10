import { render } from '@testing-library/react';
import { Separator } from '.';

describe('Separator', () => {
  it('should render a snapshot', () => {
    const { container } = render(<Separator />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
