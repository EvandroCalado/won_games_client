import { TypeHome } from '@/types';
import { gql, TypedDocumentNode } from '@apollo/client';
import {
  GameFragment,
  HighlightFragment,
  PaginationFragment,
} from '../fragments';

export const QUERY_UPCOMING: TypedDocumentNode<TypeHome> = gql`
  query QueryUpcoming($date: Date!) {
    upcomingGames: games(
      filters: { release_date: { gt: $date } }
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

    showcase: home {
      data {
        id
        attributes {
          upcomingGames {
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

  ${GameFragment}
  ${PaginationFragment}
  ${HighlightFragment}
`;
