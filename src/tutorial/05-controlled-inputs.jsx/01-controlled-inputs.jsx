import { useState } from 'react';
import { data } from '../04-LeverageJavaScript/data';

export const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    // 이름이 없으면, 그냥 그대로 return
    if (!name) return;
    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    console.log(updatedUsers);
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <form action='' className='form' onSubmit={handleSubmit}>
        <h4>controlled inputs</h4>
        <div className='form-row'>
          {/* htmlFor과 id가 매치되어야함 */}
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            id='name'
            className='form-input'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block' onClick={handleSubmit}>
          제출하기
        </button>
      </form>
      {/* render users info */}
      <h2>users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            {user.name}
            <button onClick={removeUser(user.id)}>삭제하기</button>
          </div>
        );
      })}
    </div>
  );
};
