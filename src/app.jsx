import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const Box = () => {
  const [text, setText] = useState('-');

  const handleClick = () => {
    setText(prevText => prevText === 'X' ? 'O' : 'X');
  };

  return (
    <button onClick={handleClick} style={{ width: '100px', height: '100px' }}>{text}</button>
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
root.render(<App />);


