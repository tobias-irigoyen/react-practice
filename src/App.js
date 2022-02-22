import logo from './logo.svg';
import './App.css';
import Features from './components/features/Features'
import Nav from './components/common/Nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="80" />
        <h1>Kreators</h1>
      <Nav />
      </header>

    </div>
  );
}



export default App;
