import { gql } from '@apollo/client';

export const BannerFragment = gql`
  fragment BannerFragment on Banner {
    image {
      data {
        id
        attributes {
          url
          formats
        }
      }
    }
    title
    subtitle
    button {
      id
      label
      link
    }
    ribbon {
      id
      text
      color
      size
    }
  }
`;
