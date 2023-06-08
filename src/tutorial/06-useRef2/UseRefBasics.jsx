import { useEffect, useRef, useState } from 'react';

export const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  // console.log(refContainer); // 애는 null을 가리킬꺼임 ref를 지정해줘도 처음에는 null이기 떄문에

  useEffect(() => {
    // console.log(refContainer); // useEffect 호출로 인해, ref가 연결되있는 input을 연결 DOM NODE를 얻음
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // {current: input#name.form-input 이므로}
    // useRef를 통해 uncontrolled input을 갖고올 수 있음.
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
        <div className='btn btn-block' type='submit'>
          제출하기
        </div>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)}>증가하기</button>
    </div>
  );
};
