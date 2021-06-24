import { render } from '@testing-library/react';
import { Post } from '../../context/initialState';
import PostItem from './index';

describe('components/PostItem', () => {
  const post: Post = {
    id: 0,
    canonical_url: 'canonical_url',
    cover_image: 'cover_image',
    description: 'description',
    slug: 'slug',
    social_image: 'social_image',
    tag_list: ['tag_list_1', 'tag_list_2', 'tag_list_3'],
    title: 'title',
    url: 'url',
  };

  test('should render the components without any props', () => {
    const { container } = render(<PostItem />);
    expect(container.childNodes.length).toBeGreaterThan(0);
  });

  test('should render with the correct information', () => {
    const { getByText } = render(<PostItem post={post} />);

    const title = getByText('title');
    const description = getByText('description');
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  test('should have link directed to the canonical post', () => {
    const { getByRole } = render(<PostItem post={post} />);
    const link = getByRole('link');
    expect(link).toHaveAttribute('href', 'canonical_url');
  });
});
