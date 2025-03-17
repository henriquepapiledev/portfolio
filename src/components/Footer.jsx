import Logo from './Logo/Logo';

const Footer = () => {
  return (
    <footer className="pt-14 pb-14 border-t-[1.5px] border-grey-bg">
      <div className="container mx-auto pl-4 pr-4">
        <div className="flex items-center flex-col gap-5">
          <Logo />
          <p className="font-light text-sm text-grey">
            <span className="font-bold">Henrique Papile</span> © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
