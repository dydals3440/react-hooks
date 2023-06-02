import { useState } from 'react';
import styled from 'styled-components';
import { data } from './data';

export default function UseStateArray() {
  const [people, setPeople] = useState(data);
  const handleDelete = (id) => {
    setPeople(people.filter((p) => p.id !== id));
    console.log(id);
  };
  const handleAllClear = () => {
    setPeople([]);
  };

  return (
    <Wrapper>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type='button' onClick={() => handleDelete(id)}>
              삭제하기
            </button>
          </div>
        );
      })}
      <button
        type='button'
        style={{ marginTop: '2rem' }}
        onClick={handleAllClear}
      >
        전체 삭제 버튼!
      </button>
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
    border-color: red;
  }
`;
