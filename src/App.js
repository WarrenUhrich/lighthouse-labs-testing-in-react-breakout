import logo from './logo.svg';
import './App.css';

import './components/Counter';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
        <p>
          Counter to Test:
          <Counter />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
