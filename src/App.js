import './App.css';
import { useState } from 'react';
import Header from './components/header.js'
import SearchInput from './components/searchbar.js'
import List from './components/trendingList.js'

function App() {
  const [summary, setSummary] = useState()
  return (
    <div className="App">
       
      <header className="App-header">
      <Header />
      <SearchInput setSummary={setSummary}/>
      <p>Trending in the last 24 hours</p>
      <List />
      </header>
      {/* <Summary summary={summary}/> */}
      {summary && summary}
    </div>
  );
}

export default App;
