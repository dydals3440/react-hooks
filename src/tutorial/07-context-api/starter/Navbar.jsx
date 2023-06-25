import { createContext, useState } from 'react';
import NavLinks from './NavLinks';

// 1. context를 만들어줍니다.
export const NavbarContext = createContext();

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
