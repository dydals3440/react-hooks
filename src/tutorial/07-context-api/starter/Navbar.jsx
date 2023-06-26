import { createContext, useState } from 'react';
import NavLinks from './NavLinks';
import { useContext } from 'react';

// 1. context를 만들어줍니다.
export const NavbarContext = createContext();

// * 부록 : custom hook으로 만들기
export const useAppContext = () => useContext(NavbarContext);

export default function Navbar() {
  const [user, setUser] = useState({ name: 'bob' });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <NavLinks user={user} logout={logout} />
      </nav>
    </NavbarContext.Provider>
  );
}
