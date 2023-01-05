import './App.css';
import Home from './Home';

function App() {
  const titile = "Welcome to JSON path evaluator"
  return (
    <div className="App">
      <div className="Content">
        <h1>{titile}</h1>
        <Home></Home>
        <table class="table table-sm" cellPadding="6">
          <thead> <tr><th>JSONPath</th><th>Description </th></tr></thead>
          <tbody>
            <tr><td>$</td><td>the root object/element</td></tr>
            <tr><td>@</td><td>the current object/element</td></tr>
            <tr><td>. or [] </td><td>child operator</td> </tr>
            <tr><td>..</td><td>recursive descent. JSONPath borrows this syntax from E4X.</td></tr>
            <tr><td>*</td><td>wildcard. All objects/elements regardless their names.</td></tr>
            <tr><td>[start:end:step]</td><td>array slice operator borrowed from ES4.</td></tr><tr><td>?()</td><td>applies a filter (script) expression.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
