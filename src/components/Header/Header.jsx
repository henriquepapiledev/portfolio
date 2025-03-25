import Logo from '../Logo/Logo';
import useMedia from '../../hooks/useMedia';
import HeaderLink from './HeaderLink';

const Header = () => {
  const navLinks = [
    { title: 'home', href: '#home' },
    { title: 'sobre mim', href: '#sobre' },
    { title: 'projetos', href: '#projetos' },
    { title: 'contato', href: '#contato' },
  ];

  const mobile = useMedia('(max-width: 62rem)');

  return (
    <header className="container sticky left-0 right-0 top-0 z-50 mx-auto w-full p-4">
      <nav
        className="max-screen lg:bg-white flex w-full items-center justify-between lg:px-4 py-0 lg:py-2 gap-6 rounded-full"
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
      </nav>
    </header>
  );
};

export default Header;
