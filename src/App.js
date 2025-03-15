import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from './Assets/Components/Login/Login.js';
import { LogoutButton } from './Assets/Components/Logout/Logout.js';
import { Profile } from './Assets/Components/Profile/Profile.js';
import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider} from 'primereact/api';
import { Routes, Route } from 'react-router-dom';
import Topbar from './Assets/Components/Topbar/Topbar.js';
import Sidebar from './Assets/Components/Sidebar/Sidebar1';
import Users from './Assets/Components/Dashboard/Users/Users.js';
import './App.css';
import Dashboard from './Assets/Components/Dashboard/Dashboard.js';
function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <PrimeReactProvider>
      <div className="App">
      {isAuthenticated ? (
          <>
            <Topbar />
            <div className="container">
              <Users />
            </div>
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />} />
              {/* Agrega más rutas aquí */}
            </Routes>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </PrimeReactProvider>
  );
}

export default App;
