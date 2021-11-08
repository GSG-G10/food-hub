import axios from 'axios';
import './firebaseConfig';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
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
  const [isNew, setIsNew] = useState(null);

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
    auth.onAuthStateChanged(setUser);
    setLoading(false);
  }, []);

  // register the new user in database
  const storeInDb = async (id, email, accountType) => {
    const info = { id, email, accountType };
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    if (isNew) await axios.post('/api/v1/user', info, { headers });
  };

  // Sign in with Google
  const loginWithGoogle = async () => {
    try {
      const cred = await signInWithPopup(auth, new GoogleAuthProvider());
      if (cred) {
        window.localStorage.setItem('auth', 'true');
        setIsNew(getAdditionalUserInfo(cred).isNewUser);
      }
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Sign in with Facebook
  const loginWithFacebook = async () => {
    try {
      const cred = await signInWithPopup(auth, new FacebookAuthProvider());
      if (cred) {
        window.localStorage.setItem('auth', 'true');
        setIsNew(getAdditionalUserInfo(cred).isNewUser);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // Sign in with Email and Password
  const signInWithEmail = async (email, password) => {
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      if (cred) {
        window.localStorage.setItem('auth', 'true');
        setIsNew(getAdditionalUserInfo(cred).isNewUser);
      }
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // Sign up with Email and Password
  const signUpWithEmail = async (email, password) => {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (cred) {
        window.localStorage.setItem('auth', 'true');
        setIsNew(getAdditionalUserInfo(cred).isNewUser);
      }
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };
  // Logout
  const logout = () => {
    auth.signOut();
    localStorage.setItem('auth', 'false');
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
        loginWithFacebook,
        signUpWithEmail,
        logout,
        storeInDb,
        isNew,
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
