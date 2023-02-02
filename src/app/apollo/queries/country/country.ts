import gql from "graphql-tag";

const COUNTRIES = gql`
  {
    countries{
      data{
        attributes{
          name
          capital
          currency
          emoji
          phone
          continent{
            data{
              attributes{
                name
              }
            }
          }
        }
      }
    }
  }
`
export default COUNTRIES