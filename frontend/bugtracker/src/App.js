import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginButton from './components/Login/Login';
import LogoutButton from './components/Login/Logout';
import { gapi } from 'gapi-script';
import KanbanBoard from './components/Dashboard/KanbanBoard';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const clientId = "1060612665560-bavf4bnjtsrdu1ep6if4kssggv9ko56a.apps.googleusercontent.com";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      }).then(() => {
        const authInstance = gapi.auth2.getAuthInstance();
        
        if (authInstance != null) {
          authInstance.isSignedIn.listen(updateSigninStatus);
          updateSigninStatus(authInstance.isSignedIn.get());
        }
      }).catch(err => {
        console.error("Error initializing Google API client: ", err);
      });
    }

    function updateSigninStatus(isSignedIn) {
      setIsAuthenticated(isSignedIn);
    }

    gapi.load('client:auth2', start);
  }, []);

  return (
    <Router>
      <div className="App">
        {isAuthenticated ? (
          <>
            <Navbar />
            <LogoutButton />
            <KanbanBoard />
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </Router>
  );
}

export default App;
