const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Secretkeys {
    cloudinary_cloud_name: String
    cloudinary_upload_preset: String
    google_api_key: String
  }

  type Profile {
    _id: ID
    email: String
    password: String
    cards: [Card]
  }

  type Card {
    _id: ID
    logo: String
    components: [Component]
    profileId: [Profile]
  }

  type Component {
    _id: ID
    compClass: String
    compValue: String
    compStyle: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    cards(name: String) : [Card]
    card(cardId: ID!) : Card
    me: Profile
    secretkeys: Secretkeys
  }

  type Mutation {
    addProfile(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeProfile(profileId: ID!): Profile
    createCard(cardId: ID!): Card
    removeCard(cardId: ID!): Card
    updateCard(cardId: ID!): Card
  }
`;

module.exports = typeDefs;
