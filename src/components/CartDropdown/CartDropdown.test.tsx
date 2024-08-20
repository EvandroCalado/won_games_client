import { render, screen } from '@testing-library/react';
import { CartDropdown } from '.';
import { mock } from '../CartList/mock';

describe('CartDropdown', () => {
  it('should render cart icon and badge', () => {
    render(<CartDropdown items={mock} total={300} />);

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument();
    expect(screen.getByText(mock.length)).toBeInTheDocument();
  });

  it('should render dropdown content', () => {
    render(<CartDropdown items={mock} total={300} />);

    expect(screen.getByText(/300/i)).toBeInTheDocument();
    expect(screen.getByText(mock[0].title)).toBeInTheDocument();
  });
});
