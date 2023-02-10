import { NavLink } from 'react-router-dom';
import { useAuth } from './contexts/AuthProvider';

export default function Navigation() {
  const { onLogout, token } = useAuth();
  return (
    <nav>
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/dashboard'>Dashboard</NavLink>
      <NavLink to='/admin'>Admin</NavLink>
      {token && (
        <button type='button' onClick={onLogout}>
          Sign Out
        </button>
      )}
    </nav>
  );
}
