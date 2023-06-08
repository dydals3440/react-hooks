const x = 'Hello';
const y = '';
const z = 0;

if (x) {
  console.log('y is truthy');
}

// y is falsy 답
// short circuit evaluation
if (y) {
  console.log('y is truthy');
} else {
  console.log('y is falsy');
}

if (z) {
  console.log('z in truthy');
} else {
  console.log('z is falsy');
}

// short-circuit evaluation(&& 연산자 || 연산자)
const f = 0;
const g = 1;

console.log(f && g); // 0 // 첫번째가 거짓, 그래서 0이 리턴
console.log(g && f); // 0 //  두번쨰가 거짓 그래서 0이 리턴
console.log(f || g); // 1 (첫번쨰가 거짓, 두번째가 리턴됨)
console.log(g || f); // 1 (첫번쨰가 참, 그래서 첫번째가 리턴)
