import React, { useState } from "react";
import { useSelector } from "react-redux";
import Account from "./Account";
import SignUp from "./SignUp/SignUp";
import Login from "../Login";

const AccountDetails = () => {
  const session = useSelector(state => state.session);
  const [isSigningUp, setIsSigningUp] = useState(false);

  if (session) return <Account />;

  return isSigningUp ? (
    <SignUp onChangeToLogin={() => setIsSigningUp(false)} />
  ) : (
    <Login onChangeToSignUp={() => setIsSigningUp(true)} />
  );
};

export default AccountDetails;