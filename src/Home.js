import { useAuth } from './contexts/AuthProvider';

export default function Home() {
  const { onLogin } = useAuth();

  return (
    <>
      <h2>Home</h2>
      <button type='button' onClick={onLogin}>
        Sign In
      </button>
    </>
  );
}
