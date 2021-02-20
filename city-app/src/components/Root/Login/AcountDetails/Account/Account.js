import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import clearSession from "#root/store/ducks/session";

const mutation = gql`
  mutation($sessionId: ID!) {
    deleteuserSesison(sessionId: $sessionId)
  }
`;

const LogoutLink = styled.a.attrs({ href: "#" })`
  color: blue;
  display: block;
  margin-top: 0.25rem;
`;

const Email = styled.div`
  color: ${(props) => props.theme.DarkCyan1};
  font-size: 1rem;
  margin-top: 0.25rem;
`;

const Wapper = styled.div`
  color: ${(props) => props.theme.DarkCyan};
  font-size: 0.9rem;
`;

const Account = () => {
  const dispatch = useDispatch();
  const [deleteUserSession] = useMutation(mutation);
  const session = useSelector((state) => state.session);

  return (
    <Wapper>
      Logged in as <Email>{session.user.email}</Email>
      <LogoutLink
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(clearSession());
          deleteUserSession({ variables: { sessionId: session.id } });
        }}
      >
        (Logout)
      </LogoutLink>
    </Wapper>
  );
};

export default Account;
