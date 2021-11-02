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
    error,
  } = useContext(AuthContext);
  return {
    user,
    loginWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    loginWithFacebook,
    logout,
    error,
  };
};
