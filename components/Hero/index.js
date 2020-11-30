import Image from 'next/image';
import styles from './index.module.css';

import getScrollY from '../../functions/getScrollY';

/**
 * @param {object} props
 * @param {string} props.source
 * @param {string} props.name
 * @param {string} props.greeting
 */
const Hero = ({ source, name, greeting }) => {
  const scroll = getScrollY();

  return (
    <section className={styles.hero} style={{ '--scroll': scroll }}>
      <Image src={source} alt={name} layout='fill' />
      <h3>{greeting}</h3>
      <h1>{name}</h1>
    </section>
  );
};

export default Hero;
