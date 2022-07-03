import VendingMachine from './VendingMachine';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Soda from './Soda';
import Sardines from './Sardines';
import Chips from "./Chips"

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
        
        <Routes>
          <Route path="/" element={ <VendingMachine />}/>
      
          <Route path="/soda" element={<Soda />} />

          <Route path="/chips" element={<Chips />} />
      
          <Route path="/sardines" element={<Sardines />} />
      
        </Routes>
       
    </div>
  );
}

export default App;
