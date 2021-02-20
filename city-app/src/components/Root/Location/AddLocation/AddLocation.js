import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import TextInput from "#root/components/shared/TextInput";
import TextArea from "#root/components/shared/TextArea";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useSelector } from "react-redux";

const Form = styled.form`
    background-color: ${(props) => props.theme.DarkCyan2};
    margin-top: 1rem;
    padding; 1rem;

`;

const Label = styled.label`
  display: block;

  :not(:first-child) {
    margin-top: 0.5rem;
  }
`;

const LabelText = styled.strong`
    dsiplay: inline-block;
    font-size; 0.5rem;
    margin-bottom: 5rem;
`;

const Button = styled.button`
  margin-top: 0.5rem;
  display: inline-block;
`;

const mutation = gql`
  mutation($description: String!, $title: String!) {
    createLocation(description: $description, title: $title) {
      id
    }
  }
`;

const AddLocation = () => {
  const [createLocation] = useMutation(mutation);
  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm();

  const session = useSelector((state) => state.session);
  // if (!session) return <p>Login to add Location</p>;

  const onSubmit = handleSubmit(async ({ description, title }) => {
    await createLocation({ variables: { description, title } });
    reset();
  });

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        <LabelText>Title</LabelText>
        <TextInput
          disabled={isSubmitting}
          name="title"
          ref={register}
          type="text"
        />
      </Label>
      <Label>
        <LabelText>Description</LabelText>
        <TextArea
          disabled={isSubmitting}
          name="description"
          ref={register}
          type="text"
        />
      </Label>
      <Button disabled={isSubmitting} type="submit">
        Add Location
      </Button>
    </Form>
  );
};

export default AddLocation;
