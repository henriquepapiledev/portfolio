import React from 'react';
import Logo from './Logo/Logo';

const Header = () => {
  return (
    <header className="container sticky left-0 right-0 top-0 z-50 mx-auto w-full p-4">
      <nav
        className="max-screen bg-white flex w-full items-center justify-between px-4 py-2 gap-6 rounded-md"
        role="navigation"
        aria-label="Menu de navegação"
      >
        <a href="/">
          <Logo />
        </a>
        <ul className="flex items-center gap-2.5">
          <li>
            <a
              className="block link font-light text-base text-black p-2 pb-0"
              href="#home"
            >
              home
            </a>
          </li>
          <li>
            <a
              className="block link font-light text-base text-black p-2 pb-0"
              href="#sobre"
            >
              sobre mim
            </a>
          </li>
          <li>
            <a
              className="block link font-light text-base text-black p-2 pb-0"
              href="#cases"
            >
              cases
            </a>
          </li>
          <li>
            <a
              className="block link font-light text-base text-black p-2 pb-0"
              href="#projetos"
            >
              projetos
            </a>
          </li>
          <li>
            <a
              className="block link font-light text-base text-black p-2 pb-0"
              href="#contato"
            >
              contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
