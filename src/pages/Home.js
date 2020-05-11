import React, { useEffect } from 'react';
import useAction from '../context/useActions';

import Hero from '../components/Hero';
import PersonalInfo from '../components/PersonalInfo';
import HovingCard from '../components/HovingCard';
import SectionWrapper from '../components/SectionWrapper';
import Article from '../components/ArticleWrapper';
import DateCard from '../components/DateCard';
import BarsCard from '../components/BarsCard';
import SectionBreak from '../components/SectionBreak';
import BlogPost from '../components/BlogCard';
import SkillsCard from '../components/SkillsCard';

const Main = () => {
  const { state, updatePosts } = useAction();
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

  const heroConfig = { imageSource: images.hero, name, greeting };
  const pesonalInfoConfig = { imageSource: images.hoving, name, about, socialMedia };

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=shinspiegel')
      .then((res) => res.json())
      .then((res) => updatePosts(res));
  }, []);

  console.log(posts);

  return (
    <>
      <Hero {...heroConfig} />
      <HovingCard>
        <PersonalInfo {...pesonalInfoConfig} />
      </HovingCard>
      <SectionWrapper title='My expertises' subtitle='My resume'>
        <Article title='My Experience'>
          {workExperience
            .filter((item) => !item.isHidden)
            .map((work, index) => (
              <DateCard key={index} {...work} />
            ))}
        </Article>

        <Article title='My Education'>
          {education
            .filter((item) => !item.isHidden)
            .map((education, index) => (
              <DateCard key={index} {...education} />
            ))}
        </Article>

        <Article title='Design Skills'>
          <SkillsCard list={designSkills} />
        </Article>

        <Article title='Coding Skills'>
          <SkillsCard list={codingSkills} />
        </Article>
      </SectionWrapper>

      <SectionBreak url={images.background.default} />

      {posts.length > 0 ? (
        <SectionWrapper title='Blog Posts' subtitle='I like to talk about this'>
          {posts.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </SectionWrapper>
      ) : null}
    </>
  );
};

export default Main;
