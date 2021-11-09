import { useContext } from 'react';
import { AuthContext } from './firebaseContext';

export const useAuthContext = () => {
  const {
    user,
    loginWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    loginWithFacebook,
    logout,
    storeInDb,
    isNew,
    token,
    error,
  } = useContext(AuthContext);
  return {
    user,
    loginWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    loginWithFacebook,
    storeInDb,
    logout,
    isNew,
    token,
    error,
  };
};
