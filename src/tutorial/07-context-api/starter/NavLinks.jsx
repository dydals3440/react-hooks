import UserContainer from './UserContainer';

export default function NavLinks() {
  return (
    <div className='nav-container'>
      <ul className='nav-links'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <UserContainer />
      </ul>
    </div>
  );
}
