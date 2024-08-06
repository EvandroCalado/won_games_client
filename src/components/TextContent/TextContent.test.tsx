import { render, screen } from '@testing-library/react';
import { TextContent } from '.';

const props = {
  title: 'Description',
  content: `<h1>Content</h1>`,
};

describe('TextContent', () => {
  it('should render with title and content', () => {
    render(<TextContent {...props} />);

    expect(
      screen.getByRole('heading', { level: 1, name: /description/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 1, name: /content/i }),
    ).toBeInTheDocument();
  });

  it('should render without title', () => {
    render(<TextContent content={props.content} />);

    expect(
      screen.queryByRole('heading', { level: 1, name: /description/i }),
    ).not.toBeInTheDocument();
  });
});
