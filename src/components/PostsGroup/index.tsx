import React from 'react';
import { Post } from '../../context/initialState';
import PostItem from '../PostItem';
import styles from './index.module.scss';

export interface PostsGroupProps {
  posts: Post[];
}

const PostsGroup: React.FC<PostsGroupProps> = ({ posts = [] }) => {
  return (
    <ul className={styles.container}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostsGroup;
