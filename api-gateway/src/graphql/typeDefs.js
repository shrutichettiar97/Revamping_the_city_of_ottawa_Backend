import { gql } from "apollo-server";

const typeDefs = gql
`
    scalar Date

    type Location {
        description: String!
        id: ID!
        title: String!
    }

    type Query {
        locations: [Location!]!
        userSession(me: Boolean!): UserSession
    }

    type User {
        email:String!
        id: ID!
    }

    type UserSession {
        createAt: Date!
        expiresAt: Date!
        id: ID!
        user: User!
    }

    type Mutation {
        createUser(email: String!, password: String!): User!
        createUserSession(email: String!, password: String!):UserSession!
        deleteUserSession(sessionId: ID!): Boolean!
        createLocation(description: String!, title: String!): Location!
    }


`;

export default typeDefs;