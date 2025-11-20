import React, { useState } from 'react';

function ToggleMessage() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#2a5298', color: 'white', padding: 20 }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Rainy Day Toggle</h1>
        <button onClick={() => setShow(!show)}>{show ? 'Stop Rain' : 'Start Rain'}</button>
        {show && <div><div style={{ fontSize: 40 }}>🌧️</div><p>The rain is falling peacefully...</p></div>}
      </div>
    </div>
  );
}

export default ToggleMessage;
