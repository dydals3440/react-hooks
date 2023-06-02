export default function ErrorExample() {
  let count = 0;
  const handleIncrease = () => {
    count += 1;
    console.log(count);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type='button' className='button' onClick={handleIncrease}>
        increase{' '}
      </button>
    </div>
  );
}
