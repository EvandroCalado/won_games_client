import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '.';

describe('Checkbox', () => {
  it('should render with label', () => {
    render(<Checkbox label="test" labelFor="check" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText('test')).toBeInTheDocument();
    expect(screen.getByText('test')).toHaveAttribute('for', 'check');
  });

  it('should render without label', () => {
    render(<Checkbox />);

    expect(screen.queryByLabelText('checkbox')).not.toBeInTheDocument();
  });

  it('should render with white label by default', () => {
    render(<Checkbox label="test" labelFor="check" />);

    expect(screen.getByText('test')).toHaveClass('text-white');
  });

  it('should dispath onCkeck when status changes', async () => {
    const onCheck = jest.fn();

    render(<Checkbox label="test" labelFor="check" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalled();
    });

    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('should isCheked is false', async () => {
    const onCheck = jest.fn();

    render(
      <Checkbox label="test" labelFor="check" onCheck={onCheck} isCheked />,
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalled();
    });

    expect(onCheck).toHaveBeenCalledWith(false);
  });
});
