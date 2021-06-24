import { useEffect } from 'react';
import styles from './index.module.scss';
import Article from '../components/Article';
import Hero from '../components/Hero';
import HoverCard from '../components/HoverCard';
import getState from '../context/initialState';
import useActions from '../context/useActions';
import AboutMe from '../components/AboutMe';
import EntriesGroup from '../components/EntriesGroup';
import GridContainer from '../components/GridContainer';
import SkillGroup from '../components/SkillGroup';
import Spacer from '../components/Spacer';

const Home: React.FC = () => {
  const {
    basicInfo,
    socialMedia,
    workExperience,
    education,
    codingSkills,
    designSkills,
  } = getState();
  const actions = useActions();

  useEffect(() => {
    actions.getPosts();
    actions.getStateFromStaticJson();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <GridContainer>
          <EntriesGroup
            title='Professional Experience'
            list={workExperience}
            groupIndex={10}
          />
          <EntriesGroup title='Education' list={education} groupIndex={11} />
          <SkillGroup title='Coding Skills' list={codingSkills} />
          <SkillGroup title='Design Skills' list={designSkills} />
        </GridContainer>
      </Article>
      <Spacer image={'/background_1.png'} />
    </main>
  );
};

export default Home;
