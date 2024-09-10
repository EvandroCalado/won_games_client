import { TypeGames, TypeGamesBySlug } from '@/types';
import { gql, TypedDocumentNode } from '@apollo/client';

export const QUERY_GAMES: TypedDocumentNode<TypeGames> = gql`
  query QueryGames($start: Int = 0, $limit: Int = 9) {
    games(pagination: { start: $start, limit: $limit }) {
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

export const QUERY_GAMES_BY_SLUG: TypedDocumentNode<TypeGamesBySlug> = gql`
  query QueryGameBySlug($slug: String!) {
    games(filters: { slug: { eqi: $slug } }) {
      data {
        id
        attributes {
          name
          short_description
          description
          price
          rating
          release_date
          cover {
            data {
              attributes {
                src: url
                formats
              }
            }
          }
          gallery {
            data {
              attributes {
                src: url
                label: alternativeText
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
          publisher {
            data {
              id
              attributes {
                name
              }
            }
          }
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
          platforms {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
