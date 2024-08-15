import { IconShoppingCartPlus } from '@tabler/icons-react';
import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button', () => {
  it('should render md button size by default', () => {
    render(<Button>test</Button>);
    expect(screen.getByRole('button', { name: /test/i })).toHaveClass(
      'text-sm h-10 px-8',
    );
  });

  it('should render sm button size when size is sm', () => {
    render(<Button size="sm">test</Button>);
    expect(screen.getByRole('button', { name: /test/i })).toHaveClass(
      'text-xs h-7 px-4',
    );
  });

  it('should render lg button size when size is lg', () => {
    render(<Button size="lg">test</Button>);
    expect(screen.getByRole('button', { name: /test/i })).toHaveClass(
      'text-base h-12 px-12',
    );
  });

  it('should render button with icon when icon is passed', () => {
    render(
      <Button icon={<IconShoppingCartPlus data-testid="icon" />}>test</Button>,
    );
    expect(screen.getByRole('button', { name: /test/i })).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render button with only icon when icon is passed', () => {
    render(<Button icon={<IconShoppingCartPlus data-testid="icon" />} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('px-8');
  });

  it('should render a button as a link', () => {
    render(
      <Button as="a" href="/link">
        test
      </Button>,
    );
    expect(screen.getByRole('link').tagName).toBe('A');
    expect(screen.getByRole('link')).toHaveAttribute('href', '/link');
  });

  it('should render a button snapshot', () => {
    const { container } = render(<Button>test</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render variant ghost', () => {
    render(<Button variant="ghost">test</Button>);
    expect(screen.getByRole('button')).toHaveClass('text-primary');
  });

  it('should render disabled', () => {
    render(
      <Button variant="ghost" disabled>
        test
      </Button>,
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should render a button snapshot', () => {
    const { container } = render(<Button>test</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
