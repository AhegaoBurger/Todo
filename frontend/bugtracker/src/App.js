import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginButton from './components/Login/Login';
import LogoutButton from './components/Login/Logout';
import { gapi } from 'gapi-script';
import KanbanBoard from './components/Dashboard/KanbanBoard';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const clientId = "1060612665560-bavf4bnjtsrdu1ep6if4kssggv9ko56a.apps.googleusercontent.com";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isClientLoaded, setIsClientLoaded] = useState(false);

  async function verifyUserToServer() {
    const authInstance = gapi.auth2.getAuthInstance();
    const googleUser = authInstance.currentUser.get();
    const id_token = googleUser.getAuthResponse().id_token;
    
    const result = await fetch("http://127.0.0.1:8000/api/google_login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: id_token })
    });
    
    const data = await result.json();
    
    if (data.success) {
      // Successfully verified and logged in on the server
    } else {
      // Failed to log in on the server
    }
  }

  function updateSigninStatus(isSignedIn) {
    setIsAuthenticated(isSignedIn);
    if (isSignedIn) {
      verifyUserToServer();
    }
  }

  useEffect(() => {
    if (!isClientLoaded) {
      gapi.load('client:auth2', start);
      setIsClientLoaded(true);
    }

    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"      
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

    gapi.load('client:auth2', start);
  }, [isClientLoaded]);

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
