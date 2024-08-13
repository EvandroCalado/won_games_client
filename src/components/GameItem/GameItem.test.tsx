import { render, screen } from '@testing-library/react';
import { GameItem } from '.';

const props = {
  img: '/img/card-image.png',
  title: 'Population Zero',
  price: 235,
};

describe('GameItem', () => {
  it('should render a heading', () => {
    render(<GameItem {...props} />);

    expect(
      screen.getByRole('heading', { level: 3, name: props.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toBeInTheDocument();
    expect(screen.getByText(/235/i)).toBeInTheDocument();
  });

  it('should render a download link', () => {
    const downloadLink = 'https://link';

    render(<GameItem {...props} downloadLink={downloadLink} />);

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` }),
    ).toHaveAttribute('href', downloadLink);
  });

  it('should render payment info', () => {
    const paymentInfo = {
      number: '**** **** **** 4326',
      img: '/img/marter.svg',
      flag: 'mastercard',
      purchaseDate: 'Purchase made on 07/20/2024 at 20:32',
    };

    render(<GameItem {...props} paymentInfo={paymentInfo} />);

    expect(
      screen.getByRole('img', { name: paymentInfo.flag }),
    ).toBeInTheDocument();
    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument();
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument();
  });
});
