import React from 'react';
import { Post } from '../../context/initialState';
import styles from './index.module.scss';

export interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  if (!post) return <div />;

  return (
    <li className={styles.list}>
      <a
        className={styles.container}
        href={post.canonical_url}
        target='blank'
        rel='noreferrer'
      >
        {post.cover_image ? (
          <img
            className={styles.image}
            src={post.cover_image}
            alt='Post heading'
          />
        ) : (
          <div className={styles.image} />
        )}
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.description}>{post.description}</p>
      </a>
    </li>
  );
};

export default PostItem;
