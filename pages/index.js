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

const InitialState = {
  greeting: 'Hello, I AM',
  name: 'Jeferson Leite Borges',
  about: 'Self-taught, with a passion for web development.',
  images: [],
  socialMedia: [
    { isHidden: false, icon: 'Github', link: 'https://www.github.com/shinspiegel' },
    { isHidden: false, icon: 'Gitlab', link: 'https://www.gitlab.com/shinspiegel' },
    {
      isHidden: false,
      icon: 'Linkedin',
      link: 'https://www.linkedin.com/in/jeferson-leite-borges-9a4bb832/',
    },
    { isHidden: false, icon: 'Twitter', link: 'https://www.twitter.com/shinspiegel' },
    { isHidden: false, icon: 'Behance', link: 'https://www.behance.net/jefersonleite' },
    { isHidden: false, icon: 'Instagram', link: 'https://www.instagram.com/shinspiegel' },
  ],
  workExperience: [
    {
      isHidden: false,
      entryYear: 'Nov 2019',
      quitYear: 'Present',
      title: 'Javascript Developer',
      company: 'Tentaculo.digital',
      description:
        'Development of web applications using React.js as well as backend with serverless functions in a Node.js environment.',
    },
    {
      isHidden: false,
      entryYear: 'Apr 2019',
      quitYear: 'Oct 2019',
      title: 'Web Designer and Developer',
      company: 'Beto Carrero World',
      description:
        'Design and coding landing pages using pure HTML5, CSS3 and Javascript. Creating interactive mail marketing using MJML. Design of social media and seasonal brands.',
    },
    {
      isHidden: false,
      entryYear: 'Sep 2018',
      quitYear: 'Feb 2019',
      title: 'Image Editor and Web Designer',
      company: 'DWV Interativa',
      description:
        'Design and coding of simple pure HTML5, CSS3 and vanilla Javascript, with style cohesion for each customer brand. Design of social media and seasonal brands.',
    },
    {
      isHidden: false,
      entryYear: 'Nov 2016',
      quitYear: 'Nov 2017',
      title: 'Art Director',
      company: 'To10 Propaganda',
      description:
        'Design of social media and seasonal brands. Interface design using 12 columns grid. Creating codeless web pages with online tools like Wix and Square Space.',
    },
    {
      isHidden: true,
      entryYear: 'Apr 2015',
      quitYear: 'Nov 2016',
      title: 'Graphic Designer',
      company: 'Rockfeller Franchising',
      description:
        'Design brands for numbers of seasonal events, graphic design for offset and printed media and design social media for wide range of platforms.',
    },
    {
      isHidden: true,
      entryYear: 'Oct 2014',
      quitYear: 'Fev 2015',
      title: 'Graphic Designer',
      company: 'Cópia e Cia',
      description: '',
    },
    {
      isHidden: true,
      entryYear: 'Mar 2013',
      quitYear: 'Oct 2013',
      title: 'Industrial Designer',
      company: 'Pj Laser',
      description: '',
    },
    {
      isHidden: true,
      entryYear: 'Mar 2012',
      quitYear: 'Fev 2013',
      title: 'Industrial Designer',
      company: 'Detroit Brasil',
      description: '',
    },
    {
      isHidden: true,
      entryYear: 'Ago 2008',
      quitYear: 'Mar 2012',
      title: 'Graphic Designer',
      company: 'Cajomar',
      description: '',
    },
    {
      isHidden: true,
      entryYear: 'Jun 2005',
      quitYear: 'Jan 2006',
      title: 'Informatic Tutor',
      company: 'Infocenter',
      description: '',
    },
  ],
  education: [
    {
      isHidden: false,
      title: 'Software engineering',
      entryYear: '2020',
      quitYear: '2024',
      company: 'UniCesumar',
      description:
        'This course aims to train professionals able to propose improvements and innovations in the planning, construction, management and maintenance of processes, services and computational products, based on the techniques of Software Engineering: correct, complete, safe, friendly, usable software systems, with quality, easy to maintain and fair cost.',
    },
    {
      isHidden: false,
      title: 'MBA in Frontend Development',
      entryYear: '2019',
      quitYear: '2020',
      company: 'IGTI',
      description:
        'Studies with the latest technologies, such as React, Vue and Angular, using agile methods as well as scrum techniques for project development. System architectures as well as advanced concepts in Javascript with the main standards used for web development.',
    },
    {
      isHidden: false,
      title: 'Industrial Design',
      entryYear: '2008',
      quitYear: '2013',
      company: 'UNIVALI',
      description:
        'Wide variety of design skills, including (but not limited to), graphic editing, video editing, technical drawing, 3D modeling, ergonomics, semiotics...',
    },
  ],
  designSkills: [
    {
      title: 'Adobe Software',
      listNames: ['Photoshop', 'Illustrator', 'InDesign', 'Premiere', 'After Effect'],
    },
    { title: 'CAD Software', listNames: ['AutoCAD', 'Fusion 360', 'SolidWorks', 'Meshmixer'] },
  ],
  codingSkills: [
    {
      title: 'Operating System',
      listNames: ['macOS', 'Linux Ubuntu', 'Linux Mint', 'Linux Manjaro'],
    },
    {
      title: 'Frontend',
      listNames: ['HTML5', 'CSS3', 'Vanilla JS', 'ES6+', 'SASS', 'React.js', 'Vue.js'],
    },
    {
      title: 'Backend',
      listNames: [
        'Typescript',
        'Javascript',
        'Node.js',
        'Deno.land',
        'Express.js',
        'Koa.js',
        'REST API',
      ],
    },
    { title: 'Testing', listNames: ['TDD', 'Unit Testing', 'Jest.js'] },
  ],
  posts: [],
};

export default Home;
