import { render } from '@testing-library/react';
import HoverCard from './index';

describe('components/HoverCard', () => {
  test('should render the components without any props', () => {
    const { container } = render(<HoverCard />);
    expect(container.childNodes.length).toBeGreaterThan(0);
  });
});
