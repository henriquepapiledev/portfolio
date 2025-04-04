import ExperienceCard from './ExperienceCard';
import styles from '../Experience/Experience.module.css';

const Experience = () => {
  return (
    <div className={`${styles.experience} flex flex-col gap-6 mt-20`}>
      <ExperienceCard />
    </div>
  );
};

export default Experience;
