import 'whatwg-fetch';

import graphql from '../graphql/client';
import { QueryProducts } from '../graphql/query';
import { MutationAddProduct, MutationDeleteProduct } from '../graphql/mutation';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const START_LOADING = 'START_LOADING';
export const DONE_LOADING = 'DONE_LOADING';
export const FETCHED_PRODUCTS = 'FETCHED_PRODUCTS';

export const addProduct = (product) => {
    return (dispatch) => {
        dispatch(startLoading());
        return graphql.mutate({
          mutation: MutationAddProduct,
          variables: product
        })
        .then(function(response){
            if(response.data && response.data.addProduct) {
                dispatch({
                    type: ADD_PRODUCT,
                    product: product
                });
            }
        }).then( () => {
            dispatch(doneLoading());
        }).catch( () => {
            dispatch(doneLoading());
        });
    };
};

export const editProduct = (product) =>  ({
    type: EDIT_PRODUCT,
    name: product
});

export const deleteProduct = (sku) =>  {
    return (dispatch) => {
        dispatch(startLoading());
        return graphql.mutate({
          mutation: MutationDeleteProduct,
          variables: {sku}
        })
        .then(function(response){
            if(response.data && response.data.deleteProduct) {
                dispatch({
                    type: DELETE_PRODUCT,
                    sku: sku
                });
            }
        }).then( () => {
            dispatch(doneLoading());
        }).catch( () => {
            dispatch(doneLoading());
        });
    };
};

export const startLoading = () => ({
    type: START_LOADING,
    isloading: true,
});

export const doneLoading = () => ({
    type: DONE_LOADING,
    isloading: false,
    isfetched: true
});

export const fetchedProducts = () => ({
    type: FETCHED_PRODUCTS,
    isfetched: true
});

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(startLoading());
        graphql.query({
          query: QueryProducts
        })
        .then(function(response){
            if(response.data && response.data.products) {
                dispatch({
                  type: FETCH_PRODUCTS,
                  isfetched: false,
                  products: response.data.products
                });
            }
        }).then( () => {
            dispatch(doneLoading());
        }).catch( () => {
            dispatch(doneLoading());
        });
    }
};
