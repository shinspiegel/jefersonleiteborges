import hero1 from '../assets/hero_1.jpg';
import hero1w360 from '../assets/hero_1_360.jpg';
import hero1w898 from '../assets/hero_1_898.jpg';
import hero1w1297 from '../assets/hero_1_1297.jpg';
import hero1w1616 from '../assets/hero_1_1616.jpg';
import hero1w1920 from '../assets/hero_1_1920.jpg';

import hero2 from '../assets/hero_2.jpg';
import hero2w200 from '../assets/hero_2_200.jpg';
import hero2w536 from '../assets/hero_2_536.jpg';
import hero2w773 from '../assets/hero_2_773.jpg';
import hero2w975 from '../assets/hero_2_975.jpg';
import hero2w1366 from '../assets/hero_2_1366.jpg';

import background1 from '../assets/background_1.png';
import background1w360 from '../assets/background_1_360.png';
import background1w405 from '../assets/background_1_405.png';
import background1w445 from '../assets/background_1_445.png';
import background1w481 from '../assets/background_1_481.png';
import background1w579 from '../assets/background_1_579.png';
import background1w647 from '../assets/background_1_647.png';
import background1w1200 from '../assets/background_1_1200.png';

const InitialState = {
  greeting: 'Hello, I AM',
  name: 'Jeferson Leite Borges',
  about: 'Self-taught, with a passion for web development.',

  images: {
    hero: { default: hero1, 360: hero1w360, 898: hero1w898, 1297: hero1w1297, 1616: hero1w1616, 1920: hero1w1920, },
    hoving: { default: hero2, 200: hero2w200, 536: hero2w536, 773: hero2w773, 975: hero2w975, 1366: hero2w1366, },
    background: { default: background1, 360: background1w360, 405: background1w405, 445: background1w445, 481: background1w481, 579: background1w579, 647: background1w647, 1200: background1w1200, },
  },
  socialMedia: [
    { isHidden: false, icon: 'Github',    link: 'https://www.github.com/shinspiegel' },
    { isHidden: false, icon: 'Gitlab',    link: 'https://www.gitlab.com/shinspiegel' },
    { isHidden: false, icon: 'Linkedin',  link: 'https://www.linkedin.com/in/jeferson-leite-borges-9a4bb832/', },
    { isHidden: false, icon: 'Twitter',   link: 'https://www.twitter.com/shinspiegel' },
    { isHidden: false, icon: 'Behance',   link: 'https://www.behance.net/jefersonleite' },
    { isHidden: false, icon: 'Instagram', link: 'https://www.instagram.com/shinspiegel' },
  ],
  workExperience: [
    { isHidden: false, entryYear: 'Nov 2019', quitYear: 'Present',  title: 'Javascript Developer',          company: 'Tentaculo.digital',      description: 'Development of web applications using React.js as well as backend with serverless functions in a Node.js environment.', },
    { isHidden: false, entryYear: 'Apr 2019', quitYear: 'Oct 2019', title: 'Web Designer and Developer',    company: 'Beto Carrero World',     description: 'Design and coding landing pages using pure HTML5, CSS3 and Javascript. Creating interactive mail marketing using MJML. Design of social media and seasonal brands.', },
    { isHidden: false, entryYear: 'Sep 2018', quitYear: 'Feb 2019', title: 'Image Editor and Web Designer', company: 'DWV Interativa',         description: 'Design and coding of simple pure HTML5, CSS3 and vanilla Javascript, with style cohesion for each customer brand. Design of social media and seasonal brands.', },
    { isHidden: false, entryYear: 'Nov 2016', quitYear: 'Nov 2017', title: 'Art Director',                  company: 'To10 Propaganda',        description: 'Design and coding of simple pure HTML5, CSS3 and vanilla Javascript, with style cohesion for each customer brand. Design of social media and seasonal brands.', },
    { isHidden: true,  entryYear: 'Apr 2015', quitYear: 'Nov 2016', title: 'Graphic Designer',              company: 'Rockfeller Franchising', description: 'Design brands for numbers of seasonal events, graphic design for offset and printed media and design social media for wide range of platforms.', },
  ],
  education: [
    { isHidden: false, title: 'MBA in Frontend Development ', entryYear: '2019', quitYear: '2020', company: 'IGTI',     description: 'Studies with the latest technologies, such as React, Vue and Angular, using agile methods as well as scrum techniques for project development. System architectures as well as advanced concepts in Javascript with the main standards used for web development.', },
    { isHidden: false, title: 'Industrial Design',            entryYear: '2008', quitYear: '2013', company: 'UNIVALI',  description: 'Wide variety of design skills, including (but not limited to), graphic editing, video editing, technical drawing, 3D modeling, ergonomics, semiotics...', },
  ],
  designSkills: [
    { title: 'Adobe Software', listNames: ['Photoshop', 'Illustrator', 'InDesign', 'Premiere', 'After Effect'], },
    { title: 'CAD Software',   listNames: ['AutoCAD', 'Fusion 360', 'SolidWorks', 'Meshmixer'] },
  ],
  codingSkills: [
    { title: 'Operating System', listNames: ['macOS', 'Linux Ubuntu', 'Linux Mint', 'Linux Manjaro'] },
    { title: 'Frontend',         listNames: ['HTML5', 'CSS3', 'Vanilla JS','ES6+' , 'SASS', 'React.js', 'Vue.js'] },
    { title: 'Backend',          listNames: ['Typescript', 'Javascript', 'Node.js', 'Deno.land', 'Express.js', 'Koa.js', 'REST API' ], },
    { title: 'Testing',          listNames: ['TDD', 'Unit Testing', 'Jest.js'] },
  ],
  posts: [],
};

export default InitialState;
