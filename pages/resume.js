import styles from '../styles/cv.module.css';
import InitialState from '../public/initialState.json';
import CV_ContactItens from '../components/CV_ContactItens';
import CV_SkillListing from '../components/CV_SkillListing';
import CV_Header from '../components/CV_Header';
import CV_Summary from '../components/CV_Summary';
import CV_Experience from '../components/CV_Experience';
import CV_Education from '../components/CV_Education';
import { useEffect } from 'react';

const Curriculum = () => {
  const {
    name,
    city,
    description,
    socialMedia,
    designSkills,
    codingSkills,
    workExperience,
    education,
  } = InitialState;

  useEffect(() => {
    window.print();
  }, []);

  return (
    <div className={styles.curriculum}>
      <div style={{ padding: '2mm', borderRight: '0.2mm dashed black' }}>
        <h2>Contact Information</h2>
        <CV_ContactItens list={socialMedia} />
        <CV_Education title='Education' experience={education} />
        <CV_SkillListing title='Coding Skills' skill={codingSkills} />
        <CV_SkillListing title='Design Skills' skill={designSkills} />
      </div>

      <div style={{ padding: '2mm' }}>
        <CV_Header name={name} city={city} />
        <CV_Summary title='Summary' description={description} />
        <CV_Experience title='Experience' experience={workExperience} />
      </div>
    </div>
  );
};

export default Curriculum;
