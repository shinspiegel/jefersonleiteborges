import { render } from '@testing-library/react';
import { Post } from '../../context/initialState';
import PostsGroup from './index';

describe('components/PostsGroup', () => {
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

  const list: Post[] = Array(5)
    .fill(post)
    .map((p, i) => ({ ...p, id: i }));

  test('should render the components without any props', () => {
    const { container } = render(<PostsGroup />);
    expect(container.childNodes.length).toBeGreaterThan(0);
  });

  test('should render correctly an list', () => {
    const { getByRole } = render(<PostsGroup posts={list} />);
    const listNode = getByRole('list');
    expect(listNode.children.length).toBe(5);
  });
});
