import './App.css';
import Home from './sections/Home';
import About from './sections/About';
// import Services from './sections/Services';
import Prices from './sections/Prices';
import Team from './sections/Team';
import Contact from './sections/Contact';

function App() {

  return (
    <div className="app">

      {/* Main page content */}
      <main>
        <Home />

        <About />

        {/* <Services /> */}

        <Team />

        <Prices />

        <Contact />
      </main>

      <footer>
        <p>
          Made with <i className="fas fa-heart"></i> & <i className="fas fa-coffee"></i> by <a href="http://rogeliolopez.dev" target="_blank" rel="noreferrer">Rogelio Lopez</a>
        </p>
      </footer>

    </div>
  );
}

export default App;
