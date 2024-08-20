import { fireEvent, render, screen } from '@testing-library/react';
import { Dropdown } from '.';

describe('Dropdown', () => {
  it('should render by default', () => {
    render(<Dropdown title="Dropdown">content</Dropdown>);

    expect(screen.getByText(/dropdown/i)).toBeInTheDocument();
    expect(screen.getByText(/content/i)).toHaveClass('opacity-0');
  });

  it('should render open/close content', () => {
    render(<Dropdown title="Dropdown">content</Dropdown>);

    fireEvent.click(screen.getByText(/dropdown/i));

    expect(screen.getByText(/content/i)).toHaveClass('opacity-100');

    fireEvent.click(screen.getByText(/dropdown/i));

    expect(screen.getByText(/content/i)).toHaveClass('opacity-0');
  });
});
