import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Dashboard from './Dashboard';
import Admin from './Admin';
import NoMatch from './NoMatch';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './contexts/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <h1>React Router</h1>

      <Navigation />

      <Routes>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route
          path='dashboard'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path='admin'
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
