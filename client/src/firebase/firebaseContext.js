import axios from 'axios';
import './firebaseConfig';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

export const AuthContext = React.createContext(null);

const auth = getAuth();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    // auth.onAuthStateChanged(setUser)
    auth.onAuthStateChanged((cred) => {
      if (cred) {
        setUser(cred);
        setLoading(false);
      }
    });
  }, []);

  // Sign in with Google
  const loginWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((cred) => {
        if (cred) {
          window.localStorage.setItem('auth', 'true');
        }
      })
      .catch((err) => setError(err.message));
  };

  // Sign in with Email and Password
  const signInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        if (cred) {
          window.localStorage.setItem('auth', 'true');
        }
      })
      .catch((err) => setError(err.message));
  };

  // Sign up with Email and Password
  const signUpWithEmail = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        if (cred) {
          window.localStorage.setItem('auth', 'true');
        }
      })
      .catch((err) => setError(err.message));
  };

  // Logout
  const logout = () => {
    auth.signOut();
  };

  if (loading) {
    return <>Loading...</>;
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        loginWithGoogle,
        signInWithEmail,
        signUpWithEmail,
        logout,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
