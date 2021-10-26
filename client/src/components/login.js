import React, { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import '../config/firebaseConfig';

export const Login = () => {
  const auth = getAuth();

  const [isAuth, setIsAuth] = useState(
    false || window.localStorage.getItem('auth') === 'true'
  );

  const [token, setToken] = useState('');

  console.log('token state', token);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(true);
        window.localStorage.setItem('auth', 'true');
        user.getIdToken().then((tokenId) => setToken(tokenId));
      }
    });
  }, [auth]);

  const loginWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then((cred) => {
      if (cred) {
        setIsAuth(true);
        window.localStorage.setItem('auth', 'true');
      }
    });
  };

  return (
    <div>
      {isAuth ? (
        <h1>Hello, you are logged in</h1>
      ) : (
        <button type="submit" onClick={loginWithGoogle}>
          Login with google
        </button>
      )}
    </div>
  );
};
