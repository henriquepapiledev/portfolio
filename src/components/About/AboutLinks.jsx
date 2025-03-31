import Arrow from '../../assets/icon-arrow.svg?react';

const AboutLinks = () => {
  const aboutLinks = [
    {
      title: 'LinkedIn',
      href: 'https://www.linkedin.com/in/henriquepapile/',
      img: <Arrow />,
      target: true,
    },
    {
      title: 'Github',
      href: 'https://github.com/henriquepapiledev',
      img: <Arrow />,
      target: true,
    },
    {
      title: 'Email',
      href: 'mailto:contatohenriquepapile@gmail.com',
      img: <Arrow />,
      target: false,
    },
    {
      title: 'Whatsapp',
      href: 'https://web.whatsapp.com/send/?phone=5511953553054&text=Olá%20Henrique,%20vim%20pela%20sua%20pagina%20henrique.papile.',
      img: <Arrow />,
      target: true,
    },
    {
      title: 'Currículo',
      href: 'https://docs.google.com/document/d/1usjH4KSqas9QI_bMS76IwtEdGhfVu8tnNZApibnt7YE/',
      img: <Arrow />,
      target: true,
    },
  ];

  return (
    <>
      <ul className="flex flex-wrap gap-3 font-normal text-sm uppercase opacity-container">
        {aboutLinks.map(({ title, href, img, target }) => (
          <li
            key={title}
            className="opacity-container-child h-fit transition-opacity duration-300 ease-out"
          >
            <a
              href={href}
              target={target ? '_blank' : ''}
              className="flex items-center gap-2"
            >
              {title}
              {img}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AboutLinks;
