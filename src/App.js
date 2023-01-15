import './App.css';
import Header from './components/header.js'
import SearchInput from './components/searchbar.js'
import List from './components/trendingList.js'
import Card from './components/card.js'
import Faq from './components/faq.js'

function App() {
  return (
    
    <div className="App">
      <div className="circle-bg"></div>
      <header className="App-header">
        <Header />
        <SearchInput />
        <List />
        <Card />
        <Faq />
      </header>
    </div>
  );
}

export default App;
