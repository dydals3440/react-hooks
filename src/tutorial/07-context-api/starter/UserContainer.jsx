import { useContext } from 'react';
import { NavbarContext } from './Navbar';

export default function UserContainer() {
  const { user, logout } = useContext(NavbarContext);

  return (
    <div className='user-container'>
      {user ? (
        <>
          {' '}
          {/* user가 null이면 name에 접근할 수 없기때문에 ?.을 이용한다 .이아닌 */}
          <p>Hello There, {user?.name.toUpperCase()}</p>
          <button className='btn' onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <>
          <p>Please Login</p>
          <button>Login</button>
        </>
      )}
    </div>
  );
}
