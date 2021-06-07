import { render } from '@testing-library/react';
import AboutMe from './index';

describe('components/AboutMe', () => {
  const socialMedia = Array(8);
  for (let i = 0; i < socialMedia.length; i++) {
    socialMedia[i] = {
      isHidden: i % 2 === 0,
      icon: 'Github',
      link: 'https://fake.link' + i,
    };
  }

  beforeAll(() => {
    const observe = jest.fn();
    const unobserve = jest.fn();

    window.IntersectionObserver = jest.fn(() => ({ observe, unobserve }));
  });

  test('should render the components without any props', () => {
    const { container } = render(<AboutMe />);
    expect(container.childNodes.length).toBeGreaterThan(0);
  });

  test('should render multiple itens inside the icons list, ignoring the ones with isHidden', () => {
    const { getAllByRole } = render(<AboutMe socialMedia={socialMedia} />);

    const links = getAllByRole('link');

    expect(links.length).toBe(4);
  });
});
