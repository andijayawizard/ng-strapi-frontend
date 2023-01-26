import gql from "graphql-tag";

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      data {
        attributes {      
          name
        }
      }
    }
  }
`;

export default CATEGORIES_QUERY;