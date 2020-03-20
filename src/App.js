import React from 'react';
import './App.css';
import CoronaContextProvider from './context/coronaState'
import CoronaVirus from './components/CoronaVirus';
import Header from './components/Header';
import Search from './components/Search';
import Total from './components/Total';

function App() {
  return (
    <div className="App">
     <CoronaContextProvider>
       <Header />
       <Search />
       <Total />
       <CoronaVirus />
     </CoronaContextProvider>
    </div>
  );
}

export default App;
