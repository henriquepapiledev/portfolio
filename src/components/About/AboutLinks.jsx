import { about } from '../../data/about';

const AboutLinks = () => {
  return (
    <>
      <ul className="flex flex-wrap gap-3 font-normal text-sm uppercase opacity-container">
        {about.map(({ title, href, img, target }) => (
          <li
            key={title}
            className="opacity-container-child h-fit transition-opacity duration-300 ease-out"
          >
            <a
              href={href}
              target={target ? '_blank' : ''}
              className="flex items-center text-sm text-primary gap-2"
            >
              {title}
              <img className="w-4 h-4" src={img} alt={title} />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AboutLinks;
