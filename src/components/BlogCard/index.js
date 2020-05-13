import React from 'react';
import './index.css';

const BlogCard = ({ title, description, url, cover_image, tag_list }) => (
  <a href={url} className='blogCard' target='_blank' rel='noreferrer noopener'>
    {cover_image ? <img src={cover_image} /> : null}
    <h3>{title}</h3>
    <span>
      {tag_list
        .map((tag) => '#' + tag)
        .join(', ')
        .toLowerCase()}
    </span>
    <p>{description}</p>
  </a>
);

export default BlogCard;
