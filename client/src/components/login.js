import React, { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import '../config/firebaseConfig';

export const Login = () => {
  const [isAuth, setIsAuth] = useState(false);

  const loginWithGoogle = () => {
    const auth = getAuth();
    signInWithPopup(auth, new GoogleAuthProvider()).then((cred) => {
      if (cred) {
        setIsAuth(true);
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
