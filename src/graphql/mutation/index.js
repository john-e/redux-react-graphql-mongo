import gql from 'graphql-tag';

const addProduct = gql`
    mutation addProduct($sku: String!, $name: String!, $price: Float!, $quantity: Int!, $image: String) {
        addProduct(sku: $sku, name: $name, price: $price, quantity: $quantity, image: $image) {
            sku
            name
            price
            quantity
            image
        }
    }
`;

const deleteProduct = gql`
    mutation deleteProduct($sku: String!) {
        deleteProduct(sku: $sku)
    }
`;

exports.MutationAddProduct = addProduct;
exports.MutationDeleteProduct = deleteProduct;
