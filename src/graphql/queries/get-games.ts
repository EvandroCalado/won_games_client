import { TypeGames } from '@/types';
import { gql, TypedDocumentNode } from '@apollo/client';

export const GET_GAMES: TypedDocumentNode<TypeGames> = gql`
  query QueryGames($limit: Int!) {
    games(pagination: { limit: $limit }) {
      data {
        id
        attributes {
          name
          slug
          price
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
        }
      }
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
    }
  }
`;
