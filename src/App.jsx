import { useState, useEffect } from 'react';

import './App.css';
import Filter from './components/filter/Filter';
import Header from './components/header/Header';
import List from './components/list/List';
import StoreProvider from './context/Provider';

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || false,
  );

  useEffect(() => {
    if (darkMode === true) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <StoreProvider>
      <div className="App">
        <Filter />
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <List />
      </div>
    </StoreProvider>
  );
}

export default App;
