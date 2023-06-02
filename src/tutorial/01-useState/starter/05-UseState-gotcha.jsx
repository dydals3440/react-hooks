import { useState } from 'react';

export const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const sayHello = () => {
    console.log('hello');
  };
  sayHello();
  const handleClick = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <h1>value : {value}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        increase
      </button>
    </div>
  );
};
