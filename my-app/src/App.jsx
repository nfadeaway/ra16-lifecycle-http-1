import './App.css'
import InputForm from './components/InputForm.jsx';
import {useState} from 'react';
import Clocks from './components/Clocks.jsx';

function App() {
  const [clocks, setClocks] = useState([])

  const addClock = (newClock) => {
    const sameClock = clocks.find(el => el.name === newClock.name)
    if (sameClock) {
      alert('Такие часы уже есть')
    } else {
      setClocks([...clocks, newClock])
    }
  }

  const deleteClock = (name) => {
    console.log(name)
    setClocks(clocks.filter(item => item.name !== name))
  }

  return (
    <>
      <InputForm addClock={addClock}/>
      <Clocks clocks={clocks} deleteClock={deleteClock}/>
    </>
  )
}

export default App