import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="App flex flex-col">
      <Header />
      <main className="AppBody">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
