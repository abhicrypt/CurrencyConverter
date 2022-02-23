import React,{useEffect} from 'react';
import './App.css';
import Currencyrow from './Currencyrow';

const BASE_URL ="https://api.exchangeratesapi.io/latest"

function App() {

  useEffect(()=>{
      fetch(BASE_URL)
        .then(res => res.json())
        .then(data=>console.log(data))
  },[])
  return (
    <div>
      <h1>Convert</h1>
      <Currencyrow/>
      <div className='equals'>=</div>
      <Currencyrow/>
    </div>
  );
}

export default App;
