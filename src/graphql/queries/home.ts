import { TypeHome } from '@/types';
import { gql, TypedDocumentNode } from '@apollo/client';
import {
  BannerFragment,
  GameFragment,
  HighlightFragment,
  PaginationFragment,
} from '../fragments';

export const GET_HOME: TypedDocumentNode<TypeHome> = gql`
  query QueryHome {
    banners {
      data {
        id
        attributes {
          ...BannerFragment
        }
      }
    }

    newGames: games(
      filters: { release_date: { lte: "2024-09-02" } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
      meta {
        pagination {
          ...PaginationFragment
        }
      }
    }

    upcomingGames: games(
      filters: { release_date: { gt: "2024-09-02" } }
      sort: "release_date:asc"
      pagination: { limit: 8 }
    ) {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
      meta {
        pagination {
          ...PaginationFragment
        }
      }
    }

    freeGames: games(
      filters: { price: { eq: 0 } }
      sort: "release_date:desc"
      pagination: { limit: 8 }
    ) {
      data {
        id
        attributes {
          ...GameFragment
        }
      }
      meta {
        pagination {
          ...PaginationFragment
        }
      }
    }

    sections: home {
      data {
        id
        attributes {
          newGames {
            id
            title
            highlight {
              ...HighlightFragment
            }
          }

          popularGames {
            id
            title
            highlight {
              ...HighlightFragment
            }
            games(pagination: { limit: 8 }) {
              data {
                id
                attributes {
                  ...GameFragment
                }
              }
            }
          }

          upcomingGames {
            id
            title
            highlight {
              ...HighlightFragment
            }
          }

          freeGames {
            id
            title
            highlight {
              ...HighlightFragment
            }
          }
        }
      }
    }
  }

  ${BannerFragment}
  ${GameFragment}
  ${PaginationFragment}
  ${HighlightFragment}
`;
