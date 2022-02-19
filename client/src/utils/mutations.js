import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

// Talita's adding mutations starts here
export const CREATE_CARD = gql`
mutation createCard($profileId: ID!, $cardId: ID!) {
createCard(profileId: $profileId, cardId: $cardId) {
  _id
  logo
  components {
    _id
    compClass
    compValue
    compStyle
  }
  }
}
`;

export const UPDATE_CARD = gql`
mutation updateCard ($profileId: ID!, $cardId: ID!) {
  updateCard (profileId: $profileId, cardId: $cardId) {
    _id 
    logo
    components {
      _id
      compClass
      compValue
      compStyle
    }
  }
}
`;

export const REMOVE_CARD = gql `
mutation removeCard ($cardId: ID!) {
  removeCard (cardId: $cardId) {
    _id
    logo
    components {
      _id
      compClass
      compValue
      compStyle
    }
  }
}
`
;
