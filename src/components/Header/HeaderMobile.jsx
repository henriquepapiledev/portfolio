import HeaderLink from './HeaderLink';

const HeaderMobile = () => {
  const navLinks = [
    { title: 'home', href: '#home' },
    { title: 'sobre mim', href: '#sobre' },
    { title: 'projetos', href: '#projetos' },
    { title: 'contato', href: '#contato' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white z-10">
      <ul className="flex justify-evenly w-full rounded-t-3xl border-t border-bg-700 bg-backdrop text-text-secondary shadow backdrop-blur-md">
        {navLinks.map(({ title, href }) => (
          <HeaderLink key={title} title={title} href={href} />
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMobile;
