import React, { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import axios from 'axios';

import '../config/firebaseConfig';

export const Login = () => {
  const auth = getAuth();

  const [isAuth, setIsAuth] = useState(
    false || window.localStorage.getItem('auth') === 'true'
  );

  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  console.log('USEEEER', userId);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(true);
        window.localStorage.setItem('auth', 'true');
        user.getIdToken().then((tokenId) => setToken(tokenId));
        setUserId(user.uid);
      } else {
        setIsAuth(false);
      }
    });
  }, [auth]);

  const sendUserInfo = async (tokenId, userUid) => {
    const res = await axios.get('/api/v1/auth', {
      headers: {
        Authorization: `Bearer ${tokenId}`,
        id: userUid,
      },
    });
    console.log('HEREEEE', res.data);
  };

  useEffect(() => {
    if (token) sendUserInfo(token, userId);
  }, [token, userId]);

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
