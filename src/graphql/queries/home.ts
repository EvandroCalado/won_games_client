import { TypeHome } from '@/types';
import { gql, TypedDocumentNode } from '@apollo/client';

export const GET_HOME: TypedDocumentNode<TypeHome> = gql`
  query QueryHome {
    banners {
      data {
        id
        attributes {
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
      }
    }
  }
`;
