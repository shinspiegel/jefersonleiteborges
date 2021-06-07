import { useEffect } from 'react';
import styles from './index.module.scss';
import Article from '../components/Article';
import Hero from '../components/Hero';
import HoverCard from '../components/HoverCard';
import getState from '../context/initialState';
import useActions from '../context/useActions';
import AboutMe from '../components/AboutMe';
import WorkExperience from '../components/WorkExperience';

const Home: React.FC = () => {
  const { basicInfo, socialMedia, workExperience } = getState();
  const actions = useActions();

  useEffect(() => {
    actions.getPosts();
    actions.getStateFromStaticJson();
  }, []);

  return (
    <main className={styles.container}>
      <Hero
        title={basicInfo.name}
        subTitle={basicInfo.greeting}
        image={basicInfo.heroImage}
      />
      <Article>
        <HoverCard>
          <AboutMe
            title='About Me'
            text={basicInfo.about}
            description={basicInfo.description}
            image={basicInfo.profileImage}
            socialMedia={socialMedia}
          />
        </HoverCard>
      </Article>
      <Article title='My Resume' subTitle="What I've done so far">
        <WorkExperience list={workExperience} />
      </Article>
    </main>
  );
};

export default Home;
