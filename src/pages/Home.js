import React, { useEffect } from 'react';
import { getState, getAction } from '../context/useActions';

import Hero from '../components/Hero';
import PersonalInfo from '../components/PersonalInfo';
import HovingCard from '../components/HovingCard';
import ArticleWrapper from '../components/ArticleWrapper';
import Section from '../components/SectionWrapper';
import DateCard from '../components/DateCard';
import ArticleBreak from '../components/ArticleBreak';
import BlogPost from '../components/BlogCard';
import SkillsCard from '../components/SkillsCard';

const Main = () => {
  const state = getState();
  const { updatePosts } = getAction();
  const {
    name,
    greeting,
    images,
    about,
    socialMedia,
    workExperience,
    education,
    designSkills,
    codingSkills,
    posts,
  } = state;

  const heroConfig = { imageSource: images[0], name, greeting };
  const pesonalInfoConfig = { imageSource: images[1], name, about, socialMedia };

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=shinspiegel')
      .then((res) => res.json())
      .then((res) => updatePosts(res));
  }, []);

  return (
    <>
      <Hero {...heroConfig} />
      <HovingCard>
        <PersonalInfo {...pesonalInfoConfig} />
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

      <ArticleBreak url={images[2].default} />

      {posts.length > 0 ? (
        <ArticleWrapper title='Blog Posts' subtitle='I like to talk about this'>
          {posts.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </ArticleWrapper>
      ) : null}
    </>
  );
};

export default Main;
