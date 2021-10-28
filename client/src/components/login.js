import React, { useState, useEffect, useContext } from 'react';

import '../firebase/firebaseConfig';
import { AuthContext } from '../firebase/firebaseContext';
import { useFirebaseAuth } from '../firebase/firebaseHook';

export const Login = () => {
  const { user } = useContext(AuthContext);
  const { loginWithGoogle, signInWithEmail, signUpWithEmail, logout, error } =
    useFirebaseAuth(email, password);

  return (
    <div>
      {user ? (
        <h1>Hello, you are logged in</h1>
      ) : (
        <button type="submit">Login with google</button>
      )}
    </div>
  );
};
