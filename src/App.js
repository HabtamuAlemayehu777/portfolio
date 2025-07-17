import logo from './logo.svg';
import './App.css';
import Header from './Conponent/Header/Header'
import Menu from './Conponent/Menu/Menu'
function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main-content">
        <section>
          <h1>Welcome to My Portfolio</h1>
          <p>This is a long scrollable section.</p>
          {/* Add a lot of content here to test scroll */}
        </section>
      </main>
    </div>
  );
}

export default App;
