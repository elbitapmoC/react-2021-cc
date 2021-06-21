import './App.css';
import Header from './components/Header';

function App() {
  const x = false

  return (
    // Because this is JSX, we have to use the attribute className instead of class.
    <div className="App">
      {/* We could do also:
      <Header> </Header>
      */}
      <Header name="Crash Bandicoot" />
      <p>We can write JS within the code... {x ? 'Awesome isn\'t it?' : 'Radical Dudee!'}</p>
    </div>
    // We could us a fragment (an empty element) if we don't want to have a parent element.
  );
}

export default App;
