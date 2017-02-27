const {Product} = require('../model');

module.exports = {
  Query: {
    products() {
      return Product.find().then((docs) => (docs));
    },
    product(_, { sku }) {
        return Product.findOne({sku}).then( (doc) => (doc) );
    }
  },
  Mutation: {
    addProduct(_, { sku, name, price, quantity, image }) {
        return (new Product({
            sku, 
            name, 
            price, 
            quantity, 
            image
        }))
        .save()
        .then((doc) => (doc));
    },
    updateProduct(_, { sku, name, price, quantity, image }) {
        return Product.findOneAndUpdate({sku}, { name, price, quantity, image })
            .then((doc) => (doc!==null))
            .catch(()=> (false));
    },
    deleteProduct(_, { sku }) {
        return Product.findOneAndRemove({sku})
            .then((doc) => (doc!==null))
            .catch(()=> (false));
    }
  }
};