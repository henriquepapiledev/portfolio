import Logo from './Logo/Logo';

const Footer = () => {
  return (
    <footer className="pt-14 pb-32 lg:pb-14 border-t-[1.5px] border-grey/30">
      <div className="container mx-auto pl-4 pr-4">
        <div className="flex items-center justify-between gap-5">
          <Logo />
          <p className="font-light text-sm text-secondary">
            <span className="font-bold">Henrique Papile</span> © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
