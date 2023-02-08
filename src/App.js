import React, { useState, useEffect } from "react";
const STORAGE_KEY = 'counterApp.counter'

function App() {
  const [count, setCounter] = useState(0)

  useEffect(() => {
    const storagedCounts = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (storagedCounts) setCounter(storagedCounts)
  }, [])


  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(count))
  }, [count])


  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center my-5">{count}</h1>
        <div className="buttons-center">
          <button className="btn btn-success" onClick={() => setCounter(count + 1)}>Increment</button>
          <button className="btn btn-danger" onClick={() => setCounter(count - 1)} disabled={count === 0}>Decrement</button>
          <button className="btn btn-secondary" onClick={() => setCounter(0)} disabled={count === 0}>Reset</button>
          <button className="btn btn-primary" onClick={() => setCounter(count + 10)}>Add 10</button>
        </div>
      </div>
    </div>
  );
}

export default App;
