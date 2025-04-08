import AboutMarqueeItem from './AboutMarqueeItem';
import { marquee } from '../../data/marquee';

const AboutMarquee = () => {
  return (
    <div>
      <AboutMarqueeItem images={marquee} />
    </div>
  );
};

export default AboutMarquee;
