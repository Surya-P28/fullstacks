import React, { useState } from 'react';

function ColorfulCounter() {
  const [count, setCount] = useState(0);
  const btnStyle = { padding: '10px 20px', margin: '0 5px', borderRadius: '5px', fontSize: '16px', color: 'white', border: 'none', cursor: 'pointer' };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ color: '#333' }}>Count: {count}</h1>
      <button style={{ ...btnStyle, backgroundColor: '#4CAF50' }} onClick={() => setCount(count + 1)}>+</button>
      <button style={{ ...btnStyle, backgroundColor: '#f44336' }} onClick={() => setCount(count - 1)}>-</button>
      <button style={{ ...btnStyle, backgroundColor: '#2196F3' }} onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default ColorfulCounter;
