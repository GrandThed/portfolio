import './App.css';
import AboutMe from './components/aboutMy/AboutMe';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <div className='spacer' ></div>

    </div>
  );
}

export default App;
