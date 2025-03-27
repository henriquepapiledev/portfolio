import HeaderLink from './HeaderLink';
import { navLinks } from '../../data/navLinks';

const HeaderMobile = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50">
      <ul className="flex justify-evenly w-full rounded-t-3xl border-t border-grey-bg bg-backdrop text-text-secondary shadow backdrop-blur-md">
        {navLinks.map(({ title, href, icon }) => (
          <HeaderLink icon={icon} key={title} title={title} href={href} />
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMobile;
