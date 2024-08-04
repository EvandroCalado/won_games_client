import { render, screen } from '@testing-library/react';
import { Showcase } from '.';
import { mock as GameCardSliderMock } from '../GameCardSlider/mock';
import { mock as highlightMock } from '../Highlight/mock';

const props = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: GameCardSliderMock.slice(0, 1),
};

describe('Showcase', () => {
  it('should render all elements', () => {
    render(<Showcase {...props} />);

    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: highlightMock.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: GameCardSliderMock[0].title }),
    ).toBeInTheDocument();
  });

  it('should render without title', () => {
    render(<Showcase highlight={props.highlight} games={props.games} />);

    expect(
      screen.queryByRole('heading', { name: /most popular/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: highlightMock.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: GameCardSliderMock[0].title }),
    ).toBeInTheDocument();
  });

  it('should render without highlight', () => {
    render(<Showcase title={props.title} games={props.games} />);

    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: highlightMock.title }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: GameCardSliderMock[0].title }),
    ).toBeInTheDocument();
  });

  it('should render without games', () => {
    render(<Showcase title={props.title} highlight={props.highlight} />);

    expect(
      screen.getByRole('heading', { name: /most popular/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: highlightMock.title }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: GameCardSliderMock[0].title }),
    ).not.toBeInTheDocument();
  });

  it('should render with section white', () => {
    const { container } = render(
      <Showcase title={props.title} games={props.games} isSectionWhite />,
    );

    expect(container.firstChild).toHaveClass('section-white');
    expect(screen.getByRole('heading', { name: /most popular/i })).toHaveClass(
      'text-black',
    );
  });
});
