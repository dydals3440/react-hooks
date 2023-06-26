import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions';

export const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    // state는 초기 상태이다. 즉, 우리가 처음에 data.json으로 받아온   { id: 1, name: 'john' } 이런 정보들을 담고있는 객체를 나타낸다. 추가적으로 isLoading 정보도 ...state을 통해 복사해서 받아온다.
    // action을 콘솔에 찍어보면, 현재 우리가 액션을 시행했을때 해당하는 payload: {id: 버튼의 아이디번호} type: REMOVE_ITEM이 나오는 것을 확인할 수 있다.
    console.log(state, action);
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );
    return { ...state, people: newPeople };
  }
  // return state;
  throw new Error(`No matching "${action.type}" - action type`);
};
