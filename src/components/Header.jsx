import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-t-4 border-black bg-white pt-8 pb-5">
      <div className="container mx-auto flex justify-between items-center pl-4 pr-4">
        <a href="/">
          <img className="w-11 h-11" src={logo} alt="Henrique Papile" />
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
