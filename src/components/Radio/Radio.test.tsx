import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio } from '.';

describe('Radio', () => {
  it('should render with label', () => {
    render(<Radio label="test" labelFor="check" />);

    expect(screen.getByRole('radio')).toBeInTheDocument();
    expect(screen.getByLabelText('test')).toBeInTheDocument();
    expect(screen.getByText('test')).toHaveAttribute('for', 'check');
  });

  it('should render without label', () => {
    render(<Radio />);

    expect(screen.queryByLabelText('radio')).not.toBeInTheDocument();
  });

  it('should render with white label by default', () => {
    render(<Radio label="test" labelFor="check" />);

    expect(screen.getByText('test')).toHaveClass('text-white');
  });

  it('should dispath onCkeck when status changes', async () => {
    const onCheck = jest.fn();

    render(
      <Radio label="test" labelFor="check" onCheck={onCheck} value="test" />,
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('radio'));

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalled();
    });

    expect(onCheck).toHaveBeenCalledWith('test');
  });
});
