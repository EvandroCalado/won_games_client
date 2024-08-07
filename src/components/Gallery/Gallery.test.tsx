import { fireEvent, render, screen } from '@testing-library/react';
import { Gallery } from '.';

import { mock } from './mock';

describe('Gallery', () => {
  it('should render thumbnails as buttons', () => {
    render(<Gallery items={mock.slice(0, 2)} />);

    expect(
      screen.getByRole('button', { name: /thumb - gallery image 1/i }),
    ).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fimg%2Fgames%2Fcyberpunk-1.jpg&w=3840&q=75',
    );
    expect(
      screen.getByRole('button', { name: /thumb - gallery image 2/i }),
    ).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fimg%2Fgames%2Fcyberpunk-2.jpg&w=3840&q=75',
    );
  });

  it('should render open modal', () => {
    render(<Gallery items={mock.slice(0, 2)} />);

    const modal = screen.getByLabelText('modal');

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveClass('opacity-0');

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i }),
    );
    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveClass('opacity-100');
  });

  it('should render close modal when overlay or button is clicked', () => {
    render(<Gallery items={mock.slice(0, 2)} />);

    const modal = screen.getByLabelText('modal');

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i }),
    );
    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveClass('opacity-100');

    fireEvent.click(screen.getByRole('button', { name: /close modal/i }));
    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveClass('opacity-0');
  });

  it('should render close modal when ESC is clicked', () => {
    render(<Gallery items={mock.slice(0, 2)} />);

    const modal = screen.getByLabelText('modal');

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 1/i }),
    );
    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveClass('opacity-100');

    fireEvent.keyUp(modal, { key: 'Escape', code: 'Escape' });
    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveClass('opacity-0');
  });

  it('should render open modal with selected image', async () => {
    render(<Gallery items={mock.slice(0, 2)} />);

    fireEvent.click(
      screen.getByRole('button', { name: /thumb - gallery image 2/i }),
    );

    const img = await screen.findByRole('img', { name: /gallery image 2/i });
    expect(img.parentElement?.parentElement).toHaveClass('slick-active');
  });
});
