import logo from './logo.svg';
import './App.css';
import Header from './Header'

function App() {
  const myelement = <h1>I Love JSX!</h1>;
const sum =5+5

  return (
    <div className="App">
      <header className="App-header">
        {myelement}
        {/* React is  {sum} times better than JSX */}
      </header>
    </div>
  );
}

export default App;