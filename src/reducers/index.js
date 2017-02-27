import { combineReducers } from 'redux';

import main from './main';
import products from './products';

let reducers = combineReducers({
    main,
    products
});

export default reducers;
exports.main = main;
exports.products = products;