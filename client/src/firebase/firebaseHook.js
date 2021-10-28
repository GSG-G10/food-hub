import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import axios from 'axios';

import { useEffect, useState, useContext } from 'react';
import { AuthContext } from './firebaseContext';

export const useFirebaseAuth = (email, password) => {
  const { user } = useContext(AuthContext);
  const [token, setToken] = useState('');
  const [error, setError] = [];

  const auth = getAuth();

  useEffect(() => {
    if (user) {
      window.localStorage.setItem('auth', 'true');
      user.getIdToken().then((tokenId) => setToken(tokenId));
    }
  }, [user]);

  // send token to the server
  const sendToken = async (tokenId) => {
    await axios.get('/api/v1/auth', {
      headers: {
        Authorization: `Bearer ${tokenId}`,
      },
    });
  };

  useEffect(() => {
    if (token) sendToken(token);
  }, [token]);

  // Sign in with Google
  const loginWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((cred) => {
        if (cred) {
          window.localStorage.setItem('auth', 'true');
        }
      })
      .catch((err) => setError([...error, err.message]));
  };

  // Sign in with Email and Password
  const signInWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        if (cred) {
          window.localStorage.setItem('auth', 'true');
        }
      })
      .catch((err) => setError([...error, err.message]));
  };

  // Sign up with Email and Password
  const signUpWithEmail = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        if (cred) {
          window.localStorage.setItem('auth', 'true');
        }
      })
      .catch((err) => setError([...error, err.message]));
  };

  // Logout
  const logout = () => {
    auth.signOut();
  };

  return { loginWithGoogle, signInWithEmail, signUpWithEmail, logout, error };
};
