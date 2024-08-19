import { fireEvent, render, screen } from '@testing-library/react';
import { ExploreSidebar } from '.';
import { mock } from './mock';

describe('ExploreSidebar', () => {
  it('should render headings', () => {
    render(<ExploreSidebar items={mock} onFilter={jest.fn} />);

    expect(
      screen.getByRole('heading', { level: 3, name: /price/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /sort by/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /platforms/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /genre/i }),
    ).toBeInTheDocument();
  });

  it('should render inputs', () => {
    render(<ExploreSidebar items={mock} onFilter={jest.fn} />);

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('radio', { name: /high to low/i }),
    ).toBeInTheDocument();
  });

  it('should render the filter button', () => {
    render(<ExploreSidebar items={mock} onFilter={jest.fn} />);

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument();
  });

  it('should check initial values', () => {
    render(
      <ExploreSidebar
        items={mock}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={jest.fn}
      />,
    );

    expect(
      screen.getByRole('checkbox', {
        name: /windows/i,
      }),
    ).toBeChecked();
    expect(
      screen.getByRole('radio', {
        name: /low to high/i,
      }),
    ).toBeChecked();
  });

  it('should filter with initial values', () => {
    const onFilter = jest.fn();

    render(
      <ExploreSidebar
        items={mock}
        initialValues={{ windows: true, linux: true, sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: /filter/i }));

    expect(onFilter).toHaveBeenCalledWith({
      windows: true,
      linux: true,
      sort_by: 'low-to-high',
    });
  });

  it('should filter with checked values', () => {
    const onFilter = jest.fn();

    render(<ExploreSidebar items={mock} onFilter={onFilter} />);

    fireEvent.click(screen.getByLabelText(/windows/i));
    fireEvent.click(screen.getByLabelText(/low to high/i));

    fireEvent.click(screen.getByRole('button', { name: /filter/i }));

    expect(onFilter).toHaveBeenCalledWith({
      windows: true,
      sort_by: 'low-to-high',
    });
  });

  it('should render only on radio input', () => {
    const onFilter = jest.fn();

    render(<ExploreSidebar items={mock} onFilter={onFilter} />);

    fireEvent.click(screen.getByLabelText(/low to high/i));
    fireEvent.click(screen.getByLabelText(/high to low/i));

    fireEvent.click(screen.getByRole('button', { name: /filter/i }));

    expect(onFilter).toHaveBeenCalledWith({
      sort_by: 'high-to-low',
    });
  });

  it('should render filter menu when filter button is clicked on mobile', () => {
    const onFilter = jest.fn();

    render(<ExploreSidebar items={mock} onFilter={onFilter} />);

    fireEvent.click(screen.getByLabelText(/open filters/i));

    expect(screen.getByTestId('explore-sidebar')).toHaveClass(
      'max-md:visible max-md:opacity-100',
    );

    fireEvent.click(screen.getByLabelText(/close filters/i));

    expect(screen.getByTestId('explore-sidebar')).toHaveClass(
      'max-md:invisible max-md:opacity-0',
    );
  });
});
