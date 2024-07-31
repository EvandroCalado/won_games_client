import { IconMail } from '@tabler/icons-react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextField } from '.';

describe('TextField', () => {
  it('should render with label', () => {
    render(<TextField label="test" name="test" />);

    expect(screen.getByLabelText(/test/i)).toBeInTheDocument();
  });

  it('should render without label', () => {
    render(<TextField />);

    expect(screen.queryByLabelText(/test/i)).not.toBeInTheDocument();
  });

  it('should render with placeholder', () => {
    render(<TextField placeholder="test" />);

    expect(screen.getByPlaceholderText(/test/i)).toBeInTheDocument();
  });

  it('should render with icon', () => {
    render(<TextField icon={<IconMail data-testid="icon" />} />);

    expect(screen.getByTestId(/icon/i)).toBeInTheDocument();
  });

  it('should render with icon on the right side', () => {
    render(
      <TextField icon={<IconMail data-testid="icon" />} iconPosition="right" />,
    );

    expect(screen.getByTestId(/icon/i).parentElement).toHaveClass(
      '[&>svg]:order-last',
    );
  });

  it('changes value when typing', async () => {
    const onInputChange = jest.fn();

    render(<TextField label="test" name="test" onInput={onInputChange} />);

    const input = screen.getByRole('textbox');
    const text = 'example text';

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInputChange).toHaveBeenCalledTimes(text.length);
    });

    expect(onInputChange).toHaveBeenCalledWith(text);
  });

  it('does not changes value when disabled', async () => {
    const onInputChange = jest.fn();

    render(
      <TextField label="test" name="test" onInput={onInputChange} disabled />,
    );

    const input = screen.getByRole('textbox');
    const text = 'example text';

    expect(input).toBeDisabled();

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });

    expect(onInputChange).not.toHaveBeenCalled();
  });

  it('render with error', () => {
    render(<TextField label="test" name="test" error="Error message" />);

    expect(screen.getByText(/error message/i)).toBeInTheDocument();
  });
});
