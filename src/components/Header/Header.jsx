import Logo from '../Logo/Logo';
import useMedia from '../../hooks/useMedia';
import HeaderLink from './HeaderLink';
import { navLinks } from '../../data/navLinks';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const Header = () => {
  const mobile = useMedia('(max-width: 62rem)');
  const controls = useAnimation();

  useEffect(() => {
    if (mobile) return;

    const handleScroll = () => {
      const scrollVertical = window.scrollY > 20;
      controls.start({
        width: scrollVertical ? '50%' : '100%',
        backgroundColor: scrollVertical
          ? 'var(--backdrop)'
          : 'rgb(255 255 255 255)',
        backdropFilter: scrollVertical ? 'blur(12px)' : 'none',
        outline: scrollVertical ? '1px solid var(--color-grey-bg)' : 'none',
        transition: { duration: 0.5, ease: 'easeInOut' }, // Suaviza a transição
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, mobile]);

  return (
    <motion.header
      initial={{ width: '100%' }}
      animate={controls}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="container fixed left-0 right-0 top-4 z-50 mx-auto w-full px-4 py-2 rounded-full"
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
        {/* button dark mode */}
        <div></div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
