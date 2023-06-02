import { useState } from 'react';
import styled from 'styled-components';

export default function UseStateBasics() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <Wrapper>
      <h2>useState basics</h2>
      <button type='button' className='btn' onClick={handleClick}>
        클릭해주세요
      </button>
      <span>{count}번 클릭하셨습니다.</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  .btn {
    background-color: gray;
    color: white;
    border: 1px solid white;
    border-radius: 10px;
  }
`;
