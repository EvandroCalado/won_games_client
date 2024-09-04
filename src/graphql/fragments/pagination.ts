import { gql } from '@apollo/client';

export const PaginationFragment = gql`
  fragment PaginationFragment on Pagination {
    total
    page
    pageSize
    pageCount
  }
`;
