import React from 'react';
import Logo from './Logo/Logo';

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white border-t-4 border-black pt-8 pb-5">
      <div className="container mx-auto flex justify-between items-center pl-4 pr-4">
        <a href="/">
          <Logo />
        </a>
        <nav role="navigation" aria-label="Menu de navegação">
          <ul className="flex gap-2.5">
            <li>
              <a className="font-light text-base text-black p-2" href="/">
                home
              </a>
            </li>
            <li>
              <a className="font-light text-base text-black p-2" href="#sobre">
                sobre mim
              </a>
            </li>
            <li>
              <a className="font-light text-base text-black p-2" href="#cases">
                cases
              </a>
            </li>
            <li>
              <a
                className="font-light text-base text-black p-2"
                href="#projetos"
              >
                projetos
              </a>
            </li>
            <li>
              <a
                className="font-light text-base text-black p-2"
                href="#contato"
              >
                contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
