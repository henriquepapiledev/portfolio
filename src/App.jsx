import './App.css';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Main from './components/Main';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <ThemeProvider>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-grey origin-[0%] z-30"
        style={{ scaleX }}
      />
      <Main />
    </ThemeProvider>
  );
}

export default App;
