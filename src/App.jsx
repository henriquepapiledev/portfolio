import './App.css';
import Header from './components/Header/Header';
import HeaderMobile from './components/Header/HeaderMobile';
import Footer from './components/Footer';
import Home from './pages/Home';
import useMedia from './hooks/useMedia';

function App() {
  const mobile = useMedia('(max-width: 62rem)');
  return (
    <div className="App flex flex-col">
      <Header />
      {mobile && <HeaderMobile />}
      <main className="AppBody flex-auto">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
