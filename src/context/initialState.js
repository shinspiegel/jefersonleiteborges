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

/**
 * @typedef {object} State
 * @property {string} greeting
 * @property {string} name
 * @property {string} about
 * @property {Images[]} images
 * @property {SocialMedia[]} socialMedia
 * @property {CardItem[]} workExperience
 * @property {CardItem[]} education
 * @property {HashItem[]} designSkills
 * @property {HashItem[]} codingSkills
 * @property {object[]} posts
 */

/**
 * @typedef {object} SocialMedia
 * @property {boolean} isHidden
 * @property {string} icon
 * @property {string} link
 */

/**
 * @typedef {object} CardItem
 * @property {boolean} isHidden
 * @property {string} entryYear
 * @property {string} quitYear
 * @property {string} title
 * @property {string} company
 * @property {string} description
 */

/**
 * @typedef {object} HashItem
 * @property {string} title
 * @property {string[]} listNames
 */

/**
 * @typedef {object} Images
 * @property {string} name
 * @property {import} default
 * @property {SourceSet[]} sourceSet
 */

/**
 * @typedef {object} SourceSet
 * @property {string|number} size
 * @property {import} image
 */

const InitialState = {
  greeting: 'Hello, I AM',
  name: 'Jeferson Leite Borges',
  about: 'Self-taught, with a passion for web development.',
  images: [ 
    {name: "hero",       default: hero1,       sourceSet: [ {size: "360", image: hero1w360}, {size: "898", image: hero1w898}, {size: "1297", image: hero1w1297}, {size: "1616", image: hero1w1616}, {size: "1920", image: hero1w1920}]},
    {name: "hoving",     default: hero2,       sourceSet: [ {size: "200", image: hero2w200}, {size: "536", image: hero2w536}, {size: "773", image: hero2w773},   {size: "975", image: hero2w975},   {size: "1366", image: hero2w1366}]},
    {name: "background", default: background1, sourceSet: [ {size: "360", image: background1w360}, {size: "405", image: background1w405}, {size: "445", image: background1w445}, {size: "481", image: background1w481}, {size: "579", image: background1w579}, {size: "647", image: background1w647}, {size: "1200", image: background1w1200}]},
  ],
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
    { isHidden: false, entryYear: 'Nov 2016', quitYear: 'Nov 2017', title: 'Art Director',                  company: 'To10 Propaganda',        description: 'Design of social media and seasonal brands. Interface design using 12 columns grid. Creating codeless web pages with online tools like Wix and Square Space.', },
    { isHidden: true,  entryYear: 'Apr 2015', quitYear: 'Nov 2016', title: 'Graphic Designer',              company: 'Rockfeller Franchising', description: 'Design brands for numbers of seasonal events, graphic design for offset and printed media and design social media for wide range of platforms.', },
  ],
  education: [
    { isHidden: false, title: 'Software engineering', entryYear: '2020', quitYear: '2024', company: 'UniCesumar',     description: 'This course aims to train professionals able to propose improvements and innovations in the planning, construction, management and maintenance of processes, services and computational products, based on the techniques of Software Engineering: correct, complete, safe, friendly, usable software systems, with quality, easy to maintain and fair cost.', },
    { isHidden: false, title: 'MBA in Frontend Development', entryYear: '2019', quitYear: '2020', company: 'IGTI',     description: 'Studies with the latest technologies, such as React, Vue and Angular, using agile methods as well as scrum techniques for project development. System architectures as well as advanced concepts in Javascript with the main standards used for web development.', },
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
