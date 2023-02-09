import React, { useState, useEffect } from "react";

const STORAGE_KEY_COUNTER = 'counterApp.counter'

function App() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const storagedValue = JSON.parse(localStorage.getItem(STORAGE_KEY_COUNTER))
    if (storagedValue) setCounter(storagedValue)
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_COUNTER, JSON.stringify(counter))
  }, [counter])

  return (
    <div className="app">
      <h1>{counter}</h1>
      <div className="buttons__container">
        <button onClick={() => setCounter(counter + 1)} className="button add">+1</button>
        <button onClick={() => setCounter(0)} disabled={counter === 0} className="button reset">RESET</button>
        <button onClick={() => setCounter(counter - 1)} disabled={counter === 0} className="button sub">-1</button>
      </div>
    </div>

  );
}

export default App;
