import React  from 'react'
import Pages from './pages'
import {SessionContext} from './context/SessionContext'
import "./App.css"
function App() {
  return (
    <div className="App">
      <SessionContext>
        <Pages/>
      </SessionContext>
    </div>  
  );
}

export default App;
