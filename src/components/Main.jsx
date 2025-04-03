import Header from '../components/Header/Header';
import HeaderMobile from '../components/Header/HeaderMobile';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import useMedia from '../hooks/useMedia';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import NavTop from './NavTop/NavTop';

const Main = () => {
  const mobile = useMedia('(max-width: 62rem)');
  const theme = useContext(ThemeContext);

  return (
    <div
      className="App flex flex-col bg-primary-bg"
      data-theme={theme.isDark ? 'dark' : 'light'}
    >
      <Header />
      {mobile && <HeaderMobile />}
      <main className="AppBody flex-auto">
        <Home />
      </main>
      <NavTop />
      <Footer />
    </div>
  );
};

export default Main;
