import React from 'react';
import './App.css';
import CoronaContextProvider from './context/coronaState'
import CoronaVirus from './components/CoronaVirus';

function App() {
  return (
    <div className="App">
     <CoronaContextProvider>
       <CoronaVirus />
     </CoronaContextProvider>
    </div>
  );
}

export default App;
