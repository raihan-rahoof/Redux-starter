import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const changeBackground = useSelector((state) => state.change);
  const counterValue = useSelector((state) => state.value);

  const countIncre = () => {
    dispatch({ type: 'increment' });
  };

  const countDecre = () => {
    dispatch({ type: 'decrement' });
  };

  const handleClick = () => {
    dispatch({ type: 'change-background', payload: !changeBackground });
  };

  return (
    <div style={{ width: '100%', height: '59rem', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: changeBackground ? 'yellow' : 'initial' }}>
      <div>
        <button onClick={countIncre}>Increment</button>
        <h1>{counterValue}</h1>
        <button onClick={countDecre}>Decrement</button>
      </div>
      <button onClick={handleClick}>Change me</button>
    </div>
  );
}

export default App;
