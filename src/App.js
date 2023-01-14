import './App.css';
import Header from './components/header.js'
import SearchInput from './components/searchbar.js'

function App() {
  return (
    <div className="App">
       
      <header className="App-header">
      <Header />
      <SearchInput />
      </header>
    </div>
  );
}

export default App;
