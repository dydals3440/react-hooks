import { useState } from 'react';

export const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    passwrod: '',
  });
  return (
    <div>
      <form className='form'>
        <h4>Multiple Inputs</h4>
      </form>
    </div>
  );
};
