import { Link } from 'react-scroll';
import style from '../../components/Header/HeaderLink.module.css';

const HeaderLink = ({ href, title, icon }) => {
  return (
    <>
      <li>
        <Link
          to={href}
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          activeClass="active"
          className={`${style.link} flex flex-col items-center lg:items-start font-light text-xs cursor-pointer lg:text-sm text-black p-4 lg:p-2 lg:pb-0 gap-1 lg:gap-0 transition-opacity duration-300 ease-out`}
        >
          {icon ? <img className="w-5 h-5" src={icon} alt={title} /> : ''}
          {title}
        </Link>
      </li>
    </>
  );
};

export default HeaderLink;
