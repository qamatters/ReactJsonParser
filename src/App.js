import './App.css';
import Home from './Home';

function App() {
  const titile = "Welcome to JSON path evaluator"
  return (
    <div className="App">
      <div className="Content">
        <h1>{titile}</h1>
        <Home></Home> 
        </div>
    </div>
  );
}

export default App;
