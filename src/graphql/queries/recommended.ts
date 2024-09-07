import { TypeRecommended } from '@/types';
import { gql, TypedDocumentNode } from '@apollo/client';
import { GameFragment, HighlightFragment } from '../fragments';

export const QUERY_RECOMMENDED: TypedDocumentNode<TypeRecommended> = gql`
  query QueryRecommended {
    recommended {
      data {
        id
        attributes {
          section {
            id
            title
            highlight {
              ...HighlightFragment
            }
            games {
              data {
                id
                attributes {
                  ...GameFragment
                }
              }
            }
          }
        }
      }
    }
  }

  ${GameFragment}
  ${HighlightFragment}
`;
