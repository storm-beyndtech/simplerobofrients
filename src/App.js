import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';

export default function App() {
  const [input, setInput] = useState('')


  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(e.target.value)
  }



  return (
    <div className='App'>
      <h1>ROBOFRIENDS</h1>
      <input type="text"
       placeholder='Search...'
       className='search'
       onChange={handleChange}
       value={input}
       />
      <Cards input={input} />
    </div>
  )
}

//  onChange={handleChange}