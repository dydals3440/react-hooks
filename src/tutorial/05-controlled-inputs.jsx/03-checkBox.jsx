import { useState } from 'react';
const frameworks = ['react', 'angular', 'vue', 'svelte'];

export const CheckBox = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState('react');

  const handleShipping = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };

  const handleFramework = (e) => {
    setFramework(e.target.value);
  };
  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'>무료 배송</label>
          <input
            type='checkbox'
            name='shipping'
            id='shipping'
            checked={shipping}
            onChange={handleShipping}
          />
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework'>Framework</label>
          <select name='framework' id='framework' onChange={handleFramework}>
            {frameworks.map((framework) => (
              <option key={framework}>{framework}</option>
            ))}
          </select>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
