import { FC } from 'react';
import { Container } from '../Container';
import { GameCardProps } from '../GameCard';
import { GameCardSlider } from '../GameCardSlider';
import { Heading } from '../Heading';
import { Highlight, HighlightProps } from '../Highlight';

export type ShowcaseProps = {
  title?: string;
  highlight?: HighlightProps;
  games?: GameCardProps[];
  isSectionWhite?: boolean;
};

export const Showcase: FC<ShowcaseProps> = ({
  title,
  highlight,
  games,
  isSectionWhite = false,
}) => {
  return (
    <section className={`${isSectionWhite && 'section-white'} my-4`}>
      <Container className="space-y-8">
        {!!title && (
          <Heading lineLeft color={isSectionWhite ? 'black' : 'white'}>
            {title}
          </Heading>
        )}

        {!!highlight && <Highlight {...highlight} />}

        {!!games && (
          <GameCardSlider
            items={games}
            color={isSectionWhite ? 'black' : 'white'}
          />
        )}
      </Container>
    </section>
  );
};
