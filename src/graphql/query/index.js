import gql from 'graphql-tag';

const queryProducts = gql`
    query {
        products {
            sku
            name
            price
            quantity
            image
        }
    }
`;

const queryProduct = gql`
    query getProduct($sku: String!){
      product(sku: $sku){
        sku
        name
        price
        quantity
        image
      }
    }
`;


exports.QueryProducts = queryProducts;
exports.QueryProduct = queryProduct;