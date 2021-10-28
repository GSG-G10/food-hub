import { getAuth } from 'firebase/auth';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    // auth.onAuthStateChanged(setUser)
    auth.onAuthStateChanged((cred) => {
      if (cred) {
        setUser(cred);
        setPending(false);
      }
    });
  }, [auth]);

  if (pending) {
    return <>Loading...</>;
  }
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.string.isRequired,
};
