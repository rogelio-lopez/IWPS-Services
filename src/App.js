import './App.css';
import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Prices from './sections/Prices';
import Training from './sections/Training';
import Contact from './sections/Contact';

function App() {

  return (
    <div className="app">

      {/* Main page content */}
      <main>
        <Home />

        <About />

        <Services />

        <Prices />

        <Training />

        <Contact />
      </main>

      {/* Footer */}

    </div>
  );
}

export default App;
