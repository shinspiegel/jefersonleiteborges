import React from 'react';
import styles from './index.module.scss';

export interface ArticleProps {
  title?: string;
  subTitle?: string;
}

const Article: React.FC<ArticleProps> = ({ children, subTitle, title }) => {
  return (
    <article className={styles.container}>
      {subTitle ? <h4 className={styles.subTitle}>{subTitle}</h4> : null}
      {title ? <h3 className={styles.title}>{title}</h3> : null}

      <div className={styles.wrapper}>{children}</div>
    </article>
  );
};

export default Article;
