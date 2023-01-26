import gql from "graphql-tag";

const COUNTRIES = gql`
  {
    countries{
      name
      capital
      currency
      emoji
      phone
      continent{
        name
      }
    }
  }
`
export default COUNTRIES