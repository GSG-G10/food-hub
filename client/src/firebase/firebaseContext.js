/* eslint-disable consistent-return */
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

const userErrorCodes = [
  'auth/email-already-exists',
  'auth/invalid-email',
  'auth/invalid-password',
  'auth/user-not-found',
  'auth/user-disabled',
  'auth/uid-already-exists',
  'auth/wrong-password',
];
const ignoreableUserErrors = [
  'auth/cancelled-popup-request',
  'auth/popup-blocked',
  'auth/popup-closed-by-user',
];

const isIgnorableError = (error) => ignoreableUserErrors.includes(error.code);

const isUserError = (error) => userErrorCodes.includes(error.code);

const auth = getAuth();

const googleAuthProvider = new GoogleAuthProvider();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      window.localStorage.setItem('auth', 'true');
      user.getIdToken(true).then((tokenId) => setToken(tokenId));
      setError(null);
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
  const loginWithGoogle = async ({ accountType = 'customer' } = {}) => {
    try {
      const cred = await signInWithPopup(auth, googleAuthProvider);
      if (cred) {
        window.localStorage.setItem('auth', 'true');
        if (getAdditionalUserInfo(cred).isNewUser) {
          const {
            providerData: [{ email }],
            uid,
          } = cred.user;

          await storeInDb({ id: uid, email, accountType });
        }
        return cred.user;
      }
    } catch (err) {
      if (isUserError(err) && !isIgnorableError(err)) setError(err.message);
      throw err;
    }
  };

  // Sign in with Facebook
  const loginWithFacebook = async ({ accountType = 'customer' } = {}) => {
    try {
      const cred = await signInWithPopup(auth, new FacebookAuthProvider());
      if (cred) {
        window.localStorage.setItem('auth', 'true');
        if (getAdditionalUserInfo(cred).isNewUser) {
          const {
            providerData: [{ email }],
            uid,
          } = cred.user;
          await storeInDb({ id: uid, email, accountType });
        }
        return cred.user;
      }
    } catch (err) {
      if (isUserError(err) && !isIgnorableError(err)) setError(err.message);
      throw err;
    }
  };

  // Sign in with Email and Password
  const signInWithEmail = async (email, password) => {
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      if (cred) {
        window.localStorage.setItem('auth', 'true');
        return cred.user;
      }
    } catch (err) {
      if (isUserError(err) && !isIgnorableError(err)) setError(err.message);
      throw err;
    }
  };

  // Sign up with Email and Password
  const signUpWithEmail = async ({ email, password, accountType } = {}) => {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (cred) {
        window.localStorage.setItem('auth', 'true');
        if (getAdditionalUserInfo(cred).isNewUser) {
          const { uid } = cred.user;
          await storeInDb({ id: uid, email, accountType });
        }
        return cred.user;
      }
    } catch (err) {
      if (isUserError(err) && !isIgnorableError(err)) setError(err.message);
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
        token,
        error,
        isIgnorableError,
        isUserError,
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
