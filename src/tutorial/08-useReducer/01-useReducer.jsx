import { useReducer } from 'react';
import styled from 'styled-components';
import { data } from './data';
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';
import { reducer } from './reducer';

const initialState = {
  people: data,
  isLoading: false,
};

export default function UseReducer() {
  // dispatch({type:'SOME_ACTION'})
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = (id) => {
    // setPeople(people.filter((p) => p.id !== id));
    // console.log(id);
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  const handleAllClear = () => {
    // setPeople([]);
    dispatch({ type: CLEAR_LIST });
  };
  const resetList = () => {
    // setPeople(data);
    dispatch({ type: RESET_LIST });
  };
  return (
    <Wrapper>
      {state.people.map((person) => {
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
      {state.people.length < 1 ? (
        <button type='button' style={{ marginTop: '2rem' }} onClick={resetList}>
          리셋 버튼
        </button>
      ) : (
        <button
          type='button'
          style={{ marginTop: '2rem' }}
          onClick={handleAllClear}
        >
          전체 삭제 버튼!
        </button>
      )}
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
