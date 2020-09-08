import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import HovingCard from './index';

describe('components/ArticleWrapper', () => {
  test('Should render without arguments', async () => {
    render(<HovingCard />);
  });
});
