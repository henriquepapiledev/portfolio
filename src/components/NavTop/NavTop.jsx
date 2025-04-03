import Arrow from '../../assets/icon-up-arrow.svg?react';
import { Link } from 'react-scroll';
import styles from '../../components/NavTop/NavTop.module.css';
import { useEffect, useState } from 'react';

const NavTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visible]);

  return (
    <Link
      to="home"
      smooth={true}
      duration={500}
      offset={-80}
      className={`${
        visible ? styles.visible : styles.invisible
      } fixed bottom-[88px] sm:bottom-4 right-4 z-50 flex justify-center items-center bg-white hover:bg-grey-bg w-11 h-11 transition duration-300 ease-out active:scale-[0.9] border border-grey/30 cursor-pointer shadow rounded-full`}
    >
      <Arrow />
    </Link>
  );
};

export default NavTop;
