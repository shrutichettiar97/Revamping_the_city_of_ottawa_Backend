import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import TextInput from "#root/components/shared/TextInput";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import * as yup from "yup";
import { useDispatch } from "react-redux";

const Label = styled.label`
  display: block;

  :not(:frost-child) {
    margin-top: 0.75rem;
  }
`;

const LabelText = styled.strong`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

const SignUpButton = styled.button`
  disolay: inline-block;
  margin-top: 0.5rem;
`;

const OrLogin = styled.span`
  font-size: 0.8rem;
`;

const mutation = gql`
  mutation($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      id
    }
  }
`;

const validationSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup
    .string()
    .required()
    .test(
      "sameAsConformPassword",
      "${path} is not the same as the confirmation password.",
      function () {
        console.log("password test");
        return this.parent.password === this.parent.confirmPassword;
      }
    ),
});

const SignUp = ({ onChangeToLogin: pushChangeToLogin }) => {
  //   const dispatch = useDispatch();
  const [createUser] = useMutation(mutation);
  const {
    formState: { isSubmitting, IsValid },
    handleSubmit,
    register,
    reset,
  } = useForm({ mode: "onChange", validationSchema });

  const onSubmit = handleSubmit(async ({ email, password }) => {
    await createUser({ variables: { email, password } });
    reset();
    pushChangeToLogin();
  });

  return (
    <form onSubmit={onSubmit}>
      <Label>
        <LabelText>Email</LabelText>
        <TextInput
          disabled={isSubmitting}
          name="email"
          type="email"
          ref={register}
        />
      </Label>
      <Label>
        <LabelText>Password</LabelText>
        <TextInput
          disabled={isSubmitting}
          name="password"
          type="password"
          ref={register}
        />
      </Label>
      <Label>
        <LabelText>Confirm Password</LabelText>
        <TextInput
          disabled={isSubmitting}
          name="confirmPassword"
          type="password"
          ref={register}
        />
      </Label>
      <SignUpButton disabled={isSubmitting} tyle="submit">
        Sign Up
      </SignUpButton>{" "}
      <OrLogin>
        or{" "}
        <a
          href="#"
          onClick={(evt) => {
            evt.preventDefault();
            pushChangeToLogin();
          }}
        >
          Login
        </a>
      </OrLogin>
    </form>
  );
};

export default SignUp;
