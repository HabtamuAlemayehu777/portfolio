import logo from './logo.svg';
import './App.css';
import {Header, Intro, Education, Experience, Projects, Skill, Contact, Footer} from './Components'

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Projects/>
      <Skill/>
      <Education/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
