import React from 'react';
import { Link } from 'react-router';
import * as Actions from './actions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class ProductList extends React.Component {

    constructor() {
        super();
    }

    render() {
        let childs = null;

        if(this.props && this.props.products) {
            childs = this.props.products.map( (product)=> {
                let image = '';
                if(product.image) {
                    image = <span><img src={product.image}/></span>;
                }
                return <div key={product.sku} className="product" onClick={()=> this.deleteProduct(product.sku)}>
                    {image}
                    <h3>{product.name}</h3>
                    <div>Rs. {product.price}</div> 
                    <div>Quantity: {product.quantity}</div>
                </div>;
            });
        }

        return <div className="products">
            {childs}
        </div>;
    }

    deleteProduct(sku) {
        if(confirm(`Do you really want to delete the product (${sku}) ?`)) {
            this.props.deleteProduct(sku);
        }
    }
}

export default connect(
    (state) => ({ products: state.products.products, fetching: state.products.fetching }),
    (dispatch) => bindActionCreators(Actions, dispatch)
)(ProductList);