import React, {useState} from 'react';
import './App.css';
import PlayerList from './components/playerList';
import {useLocalStorage} from './components/hooks/hooks'
import {useDarkMode} from './components/hooks/hooks'

function App() {

  const [storedValue, setStoredValue] = useLocalStorage('User')

  const submit = function (e) {
    e.preventDefault();
    const name = document.querySelector('.name')
    setStoredValue(name.value)
  }

  const [darkMode, setDarkMode] = useDarkMode(false)
  const toggleMode = e => {
    e.preventDefault()
    setDarkMode(!darkMode)
  }

  return (
    <div className="App">
    <p>Welcome back {storedValue}</p>
    <button onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'}>Darkmode</button>
    <div>
      <form>
        <input class='name' placeholder='Enter your name'></input>
        <button onClick={submit} type='submit'>Submit</button>
      </form> 
    </div>
    
      <PlayerList />
    </div>
  );
}

export default App;
