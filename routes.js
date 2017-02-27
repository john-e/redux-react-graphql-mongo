import React from 'react';

/* Components */
import App from './src/App.jsx';
import PageNotFound from './src/PageNotFound.jsx';
import ProductList from './src/ProductList.jsx';
import Product from './src/Product.jsx';
import AddProduct from './src/AddProduct.jsx';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: ProductList },
  childRoutes: [
    { path: 'product/:sku', component: Product },
    { path: 'add-product', component: AddProduct },
    { path: '*', component: PageNotFound }
  ]
};

export default routes;