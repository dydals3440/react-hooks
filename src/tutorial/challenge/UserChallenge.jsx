import React, { useState } from 'react';

export const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const login = () => {
    // normally connect to db or api
    setUser({ name: 'vegan food truck' });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <div>
          <h4>안녕하세요 {user.name}</h4>
          <button className='btn' onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>로그인 해주세요</h4>
          <button className='btn' onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};
