import React from 'react';
import './index.scss';

function Button ({text, onclick}){
  return (
    <button onClick={onclick}>
      {text}
    </button>
  );
}

export default Button;