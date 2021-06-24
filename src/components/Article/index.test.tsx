import { render } from '@testing-library/react';
import Article from './index';

describe('components/Article', () => {
  test('should render the components without any props', () => {
    const { container } = render(<Article />);
    expect(container.childNodes.length).toBeGreaterThan(0);
  });

  test('should display a a title and subtitle', () => {
    const { container, getByText } = render(
      <Article title='Title' subTitle='SubTitle' />,
    );
    const title = getByText('Title');
    const subTitle = getByText('SubTitle');

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Title');
    expect(subTitle).toBeInTheDocument();
    expect(subTitle).toHaveTextContent('SubTitle');
  });
});
