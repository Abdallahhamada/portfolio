import './assets/css/style.css'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import 'animate.css';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      {/* <div className='bg-circle1'></div> */}
      {/* <div className='bg-circle2'></div> */}
      <Nav />
        <Header />
        <Home />
      <About />
      <Contact />
      <Skills />
      
    </div>
  );
}

export default App;
