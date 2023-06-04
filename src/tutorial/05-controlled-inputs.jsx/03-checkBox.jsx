import React from 'react';

export const CheckBox = () => {
  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='shipping'>무료 배송</label>
          <input type='checkbox' />
        </div>
        <div className='form-row' style={{ textAlign: 'left' }}>
          <label htmlFor='framework'>Framework</label>
        </div>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
