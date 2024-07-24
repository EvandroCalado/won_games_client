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
      'relative after:border-b-4 after:border-b-primary after:absolute after:left-0 after:-bottom-1 after:w-1/5',
    );
  });

  it('should render a heading with a bottom with diferent tag when as is passed', () => {
    const { rerender } = render(<Heading as="h1">Most Populars</Heading>);
    expect(screen.getByRole('heading').tagName).toBe('H1');

    rerender(<Heading as="h2">Most Populars</Heading>);
    expect(screen.getByRole('heading').tagName).toBe('H2');

    rerender(<Heading as="h3">Most Populars</Heading>);
    expect(screen.getByRole('heading').tagName).toBe('H3');

    rerender(<Heading as="h4">Most Populars</Heading>);
    expect(screen.getByRole('heading').tagName).toBe('H4');

    rerender(<Heading as="h5">Most Populars</Heading>);
    expect(screen.getByRole('heading').tagName).toBe('H5');

    rerender(<Heading as="h6">Most Populars</Heading>);
    expect(screen.getByRole('heading').tagName).toBe('H6');
  });
});
