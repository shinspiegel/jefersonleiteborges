import heroBackground from '../assets/hero.jpg';

const InitialState = {
  name: 'Jeferson Leite Borges',
  about: 'Autodidact, self-motivated and I have a passion for web development.',

  greeting: 'Hello, I AM',
  images: {
    hero: { default: heroBackground, 200: heroBackground },
  },
  socialMedia: [
    { isHidden: false, icon: 'Instagram', link: 'https://www.instagram.com' },
    { isHidden: false, icon: 'Twitter', link: 'https://www.Twitter.com' },
    { isHidden: false, icon: 'Linkedin', link: 'https://www.Linkedin.com' },
    { isHidden: false, icon: 'Behance', link: 'https://www.Behance.com' },
  ],
  workExperience: [
    {
      isHidden: false,
      title: 'Javascript Developer',
      entryYear: 'Nov 2019',
      quitYear: 'Present',
      company: 'Tentaculo.digital',
      description:
        'Development of web applications using React.js as well backend with serverless functions in a Node.js environment.',
    },
    {
      isHidden: false,
      title: 'Web Designer and Developer',
      entryYear: 'Apr 2019',
      quitYear: 'Oct 2019',
      company: 'Beto Carrero World',
      description:
        'Design and coding landing pages using pure HTML5, CSS3 and Javascript. Creating interactive mail marketing using MJML. Design of social media and seasonal brands.',
    },
    {
      isHidden: false,
      title: 'Image Editor and Web Designer',
      entryYear: 'Sep 2018',
      quitYear: 'Feb 2019',
      company: 'DWV Interativa',
      description:
        'Design and code of simple pure HTML5, CSS3 and vanilla Javascript, with style cohesion for each customer brand. Design of social media and seasonal brands.',
    },
    {
      isHidden: false,
      title: 'Art Director',
      entryYear: 'Nov 2016',
      quitYear: 'Nov 2017',
      company: 'To10 Propaganda',
      description:
        'Design and code of simple pure HTML5, CSS3 and vanilla Javascript, with style cohesion for each customer brand. Design of social media and seasonal brands.',
    },
    {
      isHidden: true,
      title: 'Graphic Designer',
      entryYear: 'Apr 2015',
      quitYear: 'Nov 2016',
      company: 'Rockfeller Franchising',
      description:
        'Design brands for numbers of seasonal events, graphic design for offset and printed media and design social media for wide range of platforms.',
    },
  ],
  education: [
    {
      isHidden: false,
      title: 'MBA in Frontend Development ',
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
    { isHidden: false, skill: 'Adobe Photoshop', value: 90 },
    { isHidden: false, skill: 'Adobe Illustrator', value: 80 },
    { isHidden: false, skill: 'Adobe InDesign', value: 70 },
    { isHidden: false, skill: 'AutoCAD', value: 60 },
  ],
  codingSkills: [
    { isHidden: false, skill: 'Javascript', value: 90 },
    { isHidden: false, skill: 'HTML5', value: 95 },
    { isHidden: false, skill: 'CSS3', value: 85 },
    { isHidden: false, skill: 'Sass', value: 70 },
    { isHidden: false, skill: 'React.js', value: 80 },
    { isHidden: false, skill: 'Unit testing', value: 75 },
    { isHidden: false, skill: 'Jest', value: 60 },
    { isHidden: false, skill: 'Node.js', value: 80 },
    { isHidden: false, skill: 'REST API', value: 80 },
    { isHidden: false, skill: 'TDD', value: 50 },
  ],
  posts: [],
};

export default InitialState;
