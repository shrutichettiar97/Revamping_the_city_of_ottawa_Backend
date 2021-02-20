import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import styled from "styled-components";
import AddLocation from "./AddLocation";

const Description = styled.p`
  margin-bottom: 0;
`;

const Location = styled.div`
  padding: 1rem, 0;
  :not(:first-child) {
    border-bottom: 1px solid ${(props) => props.theme.DarkCyan1};
  }
`;

const Title = styled.strong`
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Query = gql`
  {
    locations {
      description
      id
      title
    }
  }
`;

const Locations = () => {
  const { data, loading, refetch } = useQuery(Query);
  console.log(useQuery(Query));
  if (loading) return "Loading...";
  return (
    <div>
      <div>
        {data.locations.map((location) => (
          <Location key={location.id}>
            <Title>{location.title}</Title>
            <Description>{location.description}</Description>
          </Location>
        ))}
      </div>
      <AddLocation onAddLocation={() => refetch()} />
    </div>
  );
};

export default Locations;
