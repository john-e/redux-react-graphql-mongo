const Product = require('./product');

const schema = `
  type Query {
    products: [Product]
    product(sku: String!): Product
  }

  type Mutation {
    addProduct(sku: String!, name: String!, price: Float!, quantity: Int!, image: String): Product
    updateProduct(sku: String!, name: String!, price: Float!, quantity: Int!, image: String): Boolean
    deleteProduct(sku: String!): Boolean
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;


module.exports = [schema, Product];