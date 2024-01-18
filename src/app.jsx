import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const Box = () => {
  const [text, setText] = useState('-');

  useEffect(() => {
    const interval = setInterval(() => {
      setText(prevText => prevText === 'X' ? 'O' : 'X')
    }, 300);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <button style={{ width: '100px', height: '100px' }}>
      {text}
    </button>
  );
};

const App = () => {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <Box />
    </div>
  );
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />,);


