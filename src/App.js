import './App.css';
import { useState } from 'react';
import Header from './components/header.js'
import SearchInput from './components/searchbar.js'
import List from './components/trendingList.js'
import Card from './components/card';

function App() {
  const [summary, setSummary] = useState()
  return (
    <div className="App">
       
      <header className="App-header">
      <Header />
      <SearchInput setSummary={setSummary}/>
      <List />
      <Card />
      </header>
      {/* <Summary summary={summary}/> */}
      {summary && summary}
    </div>
  );
}

export default App;
