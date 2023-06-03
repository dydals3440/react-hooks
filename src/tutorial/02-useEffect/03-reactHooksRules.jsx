// import { useEffect, useState } from 'react';

// export const Example = () => {
//   const [condition, setCondition] = useState(true);
//   //   if (condition) {
//   //     // 동작하지 않음 (hook은 조건문안에 넣으면 안됨)
//   //     const [state, setState] = useState(false);
//   //   }
//   if (condition) {
//     return <h2>Hello there</h2>;
//   }
//   // 위에서 return을 하면 코드를 읽다가 더이상 아래코드는 읽지 않기에, 작동되지 않는다! useEffect는 if문 전에 사용!
//   //   useEffect(() => {
//   //     console.log('hello');
//   //   }, []);
//   return <h2>Example</h2>;
// };
