import React from 'react';

const AboutLinks = () => {
  return (
    <>
      <ul className="flex gap-3 font-normal text-sm uppercase ">
        <li>
          <a
            href="https://www.linkedin.com/in/henriquepapile/"
            target="_blank"
            className="link"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/henriquepapiledev"
            target="_blank"
            className="link"
          >
            Github
          </a>
        </li>
        <li>
          <a href="mailto:contatohenriquepapile@gmail.com" className="link">
            Email
          </a>
        </li>
        <li>
          <a
            href="https://web.whatsapp.com/send/?phone=5511953553054&text=Olá%20Henrique,%20vim%20pela%20sua%20pagina%20henrique.papile."
            target="_blank"
            className="link"
          >
            Whatsapp
          </a>
        </li>
        <li>
          <a
            href="src/assets/pdf/Curriculum-Henrique-Papile-da-Silva-Front-End-Pleno.pdf"
            download="Henrique Papile da Silva - Front End Pleno"
            className="link"
          >
            Download CV
          </a>
        </li>
      </ul>
    </>
  );
};

export default AboutLinks;
