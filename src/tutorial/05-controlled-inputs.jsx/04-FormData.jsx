import { useState } from 'react';

export const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData);
    const name = formData.get('name');
    console.log(name);
    console.log([...formData.entries()]);
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    // 타겟창 초기화
    e.currentTarget.reset();
  };
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' name='name' />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' name='email' />
        </div>
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            name='password'
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};