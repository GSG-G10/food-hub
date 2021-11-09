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
import { api } from '../api/axios';

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
      user.getIdToken(true).then((tokenId) => setToken(tokenId));
    }
  }, [user]);

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
    setLoading(false);
  }, []);

  // register the new user in database
  const storeInDb = ({ id, email, accountType }) => {
    const info = { id, email, accountType };
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    return api.post('/user', info, { headers });
  };

  // Sign in with Google
  const loginWithGoogle = async ({ accountType }) => {
    try {
      const cred = await signInWithPopup(auth, new GoogleAuthProvider());
      if (cred) {
        window.localStorage.setItem('auth', 'true');
        if (getAdditionalUserInfo(cred).isNewUser)
          if (accountType)
            storeInDb({ id: user.uid, email: user.email, accountType });
          else {
            throw new Error('please create an account');
          }
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
        token,
        isNew,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
