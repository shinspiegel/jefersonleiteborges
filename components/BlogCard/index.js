import React from 'react';
import styles from './index.module.css';

/**
 * This will create a blog card post that will redirect to a dev.to blog post
 * @param {object} props This is the react prop
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} props.url
 * @param {string} props.cover_image
 * @param {string[]} props.tag_list
 */
const BlogCard = ({ title, description, url, cover_image, tag_list }) => (
  <a href={url} className={styles.blogCard} target='_blank' rel='noreferrer noopener'>
    {cover_image ? <img src={cover_image} /> : null}
    <h3>{title}</h3>
    <span>
      {tag_list
        ? tag_list
            .map((tag) => '#' + tag)
            .join(', ')
            .toLowerCase()
        : null}
    </span>
    <p>{description}</p>
  </a>
);

export default BlogCard;
