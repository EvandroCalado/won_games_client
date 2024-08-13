import { render, screen } from '@testing-library/react';
import { CartList } from '.';
import { mock } from './mock';

describe('CartList', () => {
  it('should render a heading', () => {
    render(<CartList items={mock} total={470} />);

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(2);
    expect(screen.getByText('$470.00')).toBeInTheDocument();
  });
});
