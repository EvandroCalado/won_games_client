import { render, screen } from '@testing-library/react';
import { Logo } from '.';

describe('Logo', () => {
  it('should render a white label by default', () => {
    render(<Logo />);

    expect(screen.getByLabelText(/won games/i).parentElement).toHaveClass(
      'text-white',
    );
  });

  it('should render a black label when color is passed', () => {
    render(<Logo color="black" />);

    expect(screen.getByLabelText(/won games/i).parentElement).toHaveClass(
      'text-black',
    );
  });

  it('should render a logo size by default', () => {
    render(<Logo />);

    expect(screen.getByLabelText(/won games/i).parentElement).toHaveClass(
      'w-28 h-8',
    );
  });

  it('should render a bigger logo', () => {
    render(<Logo size="large" />);

    expect(screen.getByLabelText(/won games/i).parentElement).toHaveClass(
      'w-52 h-14',
    );
  });

  it('should render a logo without label on mobile', () => {
    render(<Logo hideOnMobile />);

    expect(screen.getByLabelText(/won games/i).parentElement).toHaveClass(
      'max-md:h-11 max-md:w-14 max-md:[&>svg]:h-11',
    );
  });
});
