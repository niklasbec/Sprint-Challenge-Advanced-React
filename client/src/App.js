import React, {useState} from 'react';
import './App.css';
import PlayerList from './components/playerList';
import {useLocalStorage} from './components/hooks/hooks'

function App() {

  const [storedValue, setStoredValue] = useLocalStorage('Anon')

  const submit = function (e) {
    e.preventDefault();
    const name = document.querySelector('.name')
    setStoredValue(name.value)
  }

  return (
    <div className="App">
    <p>Welcome back {storedValue}</p>
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
