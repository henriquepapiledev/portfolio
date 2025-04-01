import logo from '../../assets/logo.png';
import style from '../../components/Logo/Logo.module.css';

const Logo = () => {
  return (
    <>
      <img
        className={`${style.logo} w-6 h-6 lg:w-7 lg:h-7`}
        src={logo}
        alt="Henrique Papile"
      />
    </>
  );
};

export default Logo;
