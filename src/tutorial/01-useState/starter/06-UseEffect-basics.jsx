import { useEffect, useState } from 'react';

export const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  useEffect(() => {
    console.log('hello from first useEffect');
  }, [value, secondValue]);

  useEffect(() => {
    console.log('hello from second useEffect');
  }, [secondValue]);

  return (
    <>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        버튼 클릭
      </button>
      <h1>second value : {secondValue}</h1>
      <button className='btn' onClick={() => setSecondValue(secondValue + 1)}>
        버튼 클릭
      </button>
    </>
  );
};
