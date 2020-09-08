import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import Image from './index';

describe('components/ArticleWrapper', () => {
  test.skip('Should render without arguments', async () => {
    render(<Image />);
  });
});
