import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import ArticleWrapper from './index';

describe('components/ArticleWrapper', () => {
  test('Should render without arguments', async () => {
    render(<ArticleWrapper />);
  });

  test('Should create a article', async () => {
    const config = { title: 'TITLE_TEST', subtitle: 'SUBTITLE_TEST', children: 'CHILDREN_TEST' };
    const { findByText, container } = render(
      <ArticleWrapper title={config.title} subtitle={config.subtitle}>
        <div>{config.children}</div>
      </ArticleWrapper>,
    );

    const article = await container.getElementsByTagName('article')[0];
    const title = await findByText(config.title);
    const subtitle = await findByText(config.subtitle);
    const children = await findByText(config.children);

    expect(article).toBeTruthy();
    expect(article.children.length).toBe(3);
    expect(title.innerHTML).toBe(config.title);
    expect(subtitle.innerHTML).toBe(config.subtitle);
    expect(children).toBeInTheDOM();
  });
});
