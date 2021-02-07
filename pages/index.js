import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import HovingCard from '../components/HovingCard';
import PersonalInfo from '../components/PersonalInfo';
import ArticleWrapper from '../components/ArticleWrapper';
import Section from '../components/SectionWrapper';
import DateCard from '../components/DateCard';
import SkillsCard from '../components/SkillsCard';
import ArticleBreak from '../components/ArticleBreak';
import BlogPost from '../components/BlogCard';
import InitialState from '../public/initialState.json';

function Home() {
  const [posts, setPosts] = useState([]);
  const {
    name,
    greeting,
    about,
    socialMedia,
    workExperience,
    education,
    designSkills,
    codingSkills,
  } = InitialState;

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=shinspiegel')
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  return (
    <>
      <Hero name={name} greeting={greeting} source='/hero_1.jpg' />
      <HovingCard>
        <PersonalInfo about={about} source='/hero_2.jpg' socialMedia={socialMedia} />
      </HovingCard>
      <ArticleWrapper title='My expertises' subtitle='My resume'>
        <Section title='My Experience'>
          {workExperience
            .filter((item) => !item.isHidden)
            .map((work, index) => (
              <DateCard key={index} {...work} />
            ))}
        </Section>

        <Section title='My Education'>
          {education
            .filter((item) => !item.isHidden)
            .map((education, index) => (
              <DateCard key={index} {...education} />
            ))}
        </Section>

        <Section title='Coding Skills'>
          <SkillsCard list={codingSkills} />
        </Section>

        <Section title='Design Skills'>
          <SkillsCard list={designSkills} />
        </Section>
      </ArticleWrapper>

      <ArticleBreak url='/background_1.png' />

      {posts.length > 0 ? (
        <ArticleWrapper title='Blog Posts' subtitle='I like to talk about this'>
          {posts.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </ArticleWrapper>
      ) : null}
    </>
  );
}

export default Home;
