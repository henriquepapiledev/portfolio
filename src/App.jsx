import './App.css';
import Header from './components/Header/Header';
import HeaderMobile from './components/Header/HeaderMobile';
import Footer from './components/Footer';
import Home from './pages/Home';
import useMedia from './hooks/useMedia';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const mobile = useMedia('(max-width: 62rem)');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-grey origin-[0%] z-30"
        style={{ scaleX }}
      />
      <div className="App flex flex-col">
        <Header />
        {mobile && <HeaderMobile />}
        <main className="AppBody flex-auto">
          <Home />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
