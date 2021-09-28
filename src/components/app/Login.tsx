import React, { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';

type AuthenticateCb = () => void;

const Login = (): React.ReactElement => {
  const { state } = useLocation();
  const { from } = (state as any) || { from: { pathname: '/' } };
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const login = () => {
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });
  };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  return (
    <div>
      <p>
        You must log in to view the page at
        {from.pathname}
      </p>
      <button type="button" onClick={login}>
        Log in
      </button>
    </div>
  );
};

export default Login;

/* A fake authentication function */
export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb: AuthenticateCb): void {
    this.isAuthenticated = true;
    // eslint-disable-next-line @typescript-eslint/no-implied-eval
    setTimeout(cb, 100);
  },
};
