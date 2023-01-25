import gql from "graphql-tag";
const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      data{
        attributes{
          title
          category {
            data{
              attributes{
                name
              }
            }
          }
          image {
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default ARTICLES_QUERY;