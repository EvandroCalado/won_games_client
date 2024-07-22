import { render, screen } from '@testing-library/react';
import { Heading } from '.';

describe('Heading', () => {
  it('should render a heading with a white color by default', () => {
    render(<Heading>Most Populars</Heading>);
    expect(screen.getByRole('heading')).toHaveClass('text-white');
  });

  it('should render a heading with a black color when color is passed', () => {
    render(<Heading color="black">Most Populars</Heading>);
    expect(screen.getByRole('heading')).toHaveClass('text-black');
  });

  it('should render a heading with a line left when lineLeft is passed', () => {
    render(<Heading lineLeft>Most Populars</Heading>);
    expect(screen.getByRole('heading')).toHaveClass(
      'pl-2 border-l-4 border-l-secondary',
    );
  });

  it('should render a heading with a line bottom when lineBottom is passed', () => {
    render(<Heading lineBottom>Most Populars</Heading>);
    expect(screen.getByRole('heading')).toHaveClass(
      'relative after:border-b-4 after:border-b-primary after:absolute after:left-0 after:-bottom-1 after:w-12',
    );
  });
});
