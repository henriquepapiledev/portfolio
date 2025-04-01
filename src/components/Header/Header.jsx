import Logo from '../Logo/Logo';
import useMedia from '../../hooks/useMedia';
import HeaderLink from './HeaderLink';
import { navLinks } from '../../data/navLinks';
import { motion, useScroll, useTransform } from 'framer-motion';
import DarkModeSwitch from '../DarkModeSwitch/DarkModeSwitch';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

const Header = () => {
  const theme = useContext(ThemeContext);
  const mobile = useMedia('(max-width: 62rem)');
  const { scrollY } = useScroll();

  const background = useTransform(
    scrollY,
    [0, 500],
    !mobile
      ? ['rgba(255, 255, 255, 0)', 'var(--color-primary-bg-opacity)']
      : ['transparent', 'transparent'],
  );
  const width = useTransform(
    scrollY,
    [0, 500],
    !mobile ? [1280, 600] : ['inherit', 'inherit'],
  );
  const backdropFilter = useTransform(
    scrollY,
    [0, 500],
    !mobile ? ['none', 'blur(12px)'] : ['none', 'none'],
  );
  const outline = useTransform(
    scrollY,
    [0, 500],
    !mobile ? ['none', '1px solid var(--color-grey-bg)'] : ['none', 'none'],
  );

  return (
    <motion.header
      style={{
        background,
        backdropFilter,
        width,
        outline,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="container fixed left-0 right-0 top-4 z-50 mx-auto w-full px-4 py-1 rounded-full"
    >
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.3,
          ease: 'easeOut',
          type: 'spring',
          stiffness: 80,
          damping: 12,
        }}
        className="max-screen flex w-full items-center justify-between gap-6"
        role="navigation"
        aria-label="Menu de navegação"
      >
        <a href="/">
          <Logo />
        </a>

        {!mobile && (
          <ul className="flex items-center gap-2.5">
            {navLinks.map(({ title, href }) => (
              <HeaderLink title={title} href={href} key={title} />
            ))}
          </ul>
        )}
        <DarkModeSwitch
          ischecked={theme.isDark}
          handleChange={() => theme.setIsDark(!theme.isDark)}
        />
      </motion.nav>
    </motion.header>
  );
};

export default Header;
