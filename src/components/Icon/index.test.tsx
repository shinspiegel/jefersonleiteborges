import { render } from '@testing-library/react';
import Icon from './index';

describe('components/Icon', () => {
  test('Should return no icon', () => {
    const { container } = render(<Icon />);
    expect(container.childNodes.length).toBe(0);
  });

  test('Should return no icon', () => {
    const { container } = render(<Icon icon={'FAKE_ICON'} />);
    expect(container.childNodes.length).toBe(0);
  });

  test('Should return be able to render all the icons', () => {
    const { container } = render(
      <>
        <Icon icon='Email' />
        <Icon icon='Github' />
        <Icon icon='Gitlab' />
        <Icon icon='Linkedin' />
        <Icon icon='Twitter' />
        <Icon icon='Behance' />
        <Icon icon='Instagram' />
      </>,
    );

    expect(container.childNodes.length).toBe(7);
  });
});
