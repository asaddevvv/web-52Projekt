import './App.css';
import AboutProduct from './components/AboutProduct';
import Drone from './components/Drone';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Heros from './components/Heros';
import NewShop from './components/NewShop';
import Popular from './components/Popular';

function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <Heros/>
    <Drone/>
    <AboutProduct/>
    <Popular/>
    <NewShop/>
    <Footer/>
    </div>
  );
}

export default App;
