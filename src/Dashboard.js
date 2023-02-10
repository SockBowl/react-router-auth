import { useAuth } from './contexts/AuthProvider';

export default function Dashboard() {
  const { token } = useAuth();
  return (
    <>
      <h2>Dashboard</h2>
      <div>Authenticated as {token}</div>
    </>
  );
}
