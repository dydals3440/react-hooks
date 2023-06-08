import { useEffect, useRef, useState } from 'react';

export const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null); // {current: null}
  const isMounted = useRef(false); // {current: false}
  // console.log(refContainer); // 애는 null을 가리킬꺼임 ref를 지정해줘도 처음에는 null이기 떄문에

  useEffect(() => {
    // 페이지가 Refresh되면, 인풋창에 focus
    refContainer.current.focus();
  });

  useEffect(() => {
    // console.log(refContainer); // useEffect 호출로 인해, ref가 연결되있는 input을 연결 DOM NODE를 얻음
    if (!isMounted.current) {
      console.log(isMounted);
      isMounted.current = true;
      return;
    }
    console.log('re-render');
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // {current: input#name.form-input 이므로}
    // useRef를 통해 uncontrolled input값을 받아올 수 있음.
    const name = refContainer.current.value;
    console.log(name);
  };
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            이름
          </label>
          <input
            type='text'
            id='name'
            className='form-input'
            ref={refContainer}
          />
        </div>
        <button className='btn btn-block' type='submit'>
          제출하기
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)}>증가하기</button>
    </div>
  );
};
