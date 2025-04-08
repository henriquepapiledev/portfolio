import AboutMarqueeItem from './AboutMarqueeItem';
import iconHtml from '../../assets/about/icon-html.svg';
import iconCss from '../../assets/about/icon-css.svg';
import iconJavascript from '../../assets/about/icon-javaScript.svg';
import iconTailwind from '../../assets/about/icon-tailwindcss.svg';
import iconReact from '../../assets/about/icon-react.svg';
import iconNodejs from '../../assets/about/icon-nodejs.svg';
import iconGit from '../../assets/about/icon-git.svg';
import iconAngular from '../../assets/about/icon-angular.svg';
import iconFigma from '../../assets/about/icon-figma.svg';
import iconFramerMotion from '../../assets/about/icon-framer-motion.svg';

const AboutMarquee = () => {
  const marquee = [
    { id: 1, icon: iconHtml, desc: 'HTML' },
    { id: 2, icon: iconCss, desc: 'CSS' },
    { id: 3, icon: iconJavascript, desc: 'JavaScript' },
    { id: 4, icon: iconTailwind, desc: 'Tailwind' },
    { id: 5, icon: iconReact, desc: 'React' },
    { id: 6, icon: iconAngular, desc: 'Angular' },
    { id: 7, icon: iconNodejs, desc: 'Node.js' },
    { id: 8, icon: iconFramerMotion, desc: 'Framer Motion' },
    { id: 9, icon: iconFigma, desc: 'Figma' },
    { id: 10, icon: iconGit, desc: 'Git' },
  ];

  return (
    <div>
      <AboutMarqueeItem images={marquee} />
    </div>
  );
};

export default AboutMarquee;
