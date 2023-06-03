import { useEffect, useState } from 'react';

export const CleanUpFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log('render');
  return (
    <div>
      <button className='btn' onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  // 2번 출력됨 버튼 누를떄마다
  // CleanUpFunction에서 버튼을 클릭하면 re-rendering 발생, toggle값이 변환되어 1번 출력 useEffect [] 이므로, RandomComponent가 다시 렌더링 되므로, useEffect훅도 다시 실행 그래서 1번 더 출력'
  const someFunc = () => {
    // 로직들
  };
  useEffect(() => {
    // console.log('흥미롭네요');
    // const intId = setInterval(() => {
    //   console.log('안녕하세요 인터벌중입니다');
    // }, 1000);
    // // toggle이 false이면 이제
    // return () => {
    //   clearInterval(intId);
    //   console.log('clean up');
    // };
    window.addEventListener('scroll', someFunc);
    return () => {
      window.removeEventListener('scroll', someFunc);
    };
  }, []);
  return <h1>안녕하세요</h1>;
};
