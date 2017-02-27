import * as Actions from '../actions';
import * as State from './state';
import _ from 'lodash';

const product = (state = {}, action) => {
    switch (action.type) {
        case Actions.ADD_PRODUCT:
            return action.product;
            break;
        default:
          return state
    }
};

const products = (state = State.products, action) => {
    switch (action.type) {
        case Actions.FETCH_PRODUCTS:
            if(state.isfetched) {
                return state;
            }
            return {
                ...state,
                ...action
            };
            break;
        case Actions.ADD_PRODUCT:
            return {
                ...state,
                products: [
                    ...state.products,
                    product(undefined, action)
                ]
            };
            break;
        case Actions.DELETE_PRODUCT:
            let products = _.filter(state.products, function(o) { return o.sku != action.sku; });
            return {
                ...state,
                products
            };
            break;
        case Actions.FETCHED_PRODUCTS:
            return {
                ...state,
                isfetched: action.isfetched
            }
            break;
        default:
          return state
    }
}

export default products;