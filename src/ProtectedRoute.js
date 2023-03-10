import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './contexts/AuthProvider';

export default function ProtectedRoute({ children }) {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to='/home' replace state={{ from: location }} />;
  }

  return children;
}
