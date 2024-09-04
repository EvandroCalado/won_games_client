import { gql } from '@apollo/client';

export const GameFragment = gql`
  fragment GameFragment on Game {
    name
    slug
    cover {
      data {
        id
        attributes {
          url
          formats
        }
      }
    }
    developers {
      data {
        id
        attributes {
          name
        }
      }
    }
    price
  }
`;
