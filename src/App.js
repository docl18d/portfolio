import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Adrein Leavitt
          <br> Sergeant Major (Special Forces, Retired), MSM, MBA</br>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter to see
        </a>
      </header>
    </div>
  );
}

export default App;
