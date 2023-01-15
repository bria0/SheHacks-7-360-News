import './App.css';
import React, { useState, useRef } from 'react';

import Header from './components/header.js'
import SearchInput from './components/searchbar.js'
import List from './components/trendingList.js'
import Card from './components/card.js'

function App() {
  const [summary, setSummary] = useState('');
  return (
    
    <div className="App">
      <div className="circle-bg"></div>
      <header className="App-header">
      <Header />
      <SearchInput setSummary={setSummary}/>
      <Card summary={summary}/>
      <List />
      </header>
    </div>
  );
}

export default App;
