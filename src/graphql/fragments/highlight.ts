import { gql } from '@apollo/client';

export const HighlightFragment = gql`
  fragment HighlightFragment on ComponentPageHighlight {
    id
    title
    subtitle
    backgroundImage {
      data {
        id
        attributes {
          url
          formats
        }
      }
    }
    floatImage {
      data {
        id
        attributes {
          url
          formats
        }
      }
    }
    buttonLabel
    buttonLink
    alignment
  }
`;
