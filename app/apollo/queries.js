import {gql} from '@apollo/client';

export const GET_CHARACTERS = gql`
  query characters($page: Int, $search: String) {
    characters(page: $page, filter: {name: $search}) {
      info {
        count
      }
      results {
        id
        name
        image
        species
        gender
        episode {
          name
          air_date
        }
      }
    }
  }
`;
