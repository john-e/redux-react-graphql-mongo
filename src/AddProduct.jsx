import React from 'react';
import * as Actions from './actions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { setRouteLeaveHook } from 'react-router';
import serialize from 'form-serialize';
import {slugify, isURL} from './utils';

class AddProduct extends React.Component {

    constructor() {
        super();

        this.submit = this.submit.bind(this);
    }

    render() {
        return <form ref="form" onSubmit={this.submit} className="product-form">
            <input type="text" name="name" placeholder="Name"/> <br/>
            <input type="text" name="sku" placeholder="SKU"/> <br/>
            <input type="number" name="price" placeholder="Price" min="0"/> <br/>
            <input type="number" name="quantity" placeholder="Quantity" min="0"/> <br/>
            <input type="text" name="image" placeholder="Image URL"/> <br/>

            <button type="submit">Add Product</button>
        </form>;
    }

    submit(e) {
        e.preventDefault();
        let product = serialize(this.refs.form, {hash:true});
        product.sku = slugify(product.sku);

        if(!isURL(product.image)) {
            product.image = null;
        }
        //add product and redirect
        this.props.addProduct(product).then((err, data)=> {
            this.props.router.push('/');
        });
    }
}

export default connect(
    (state) => ({}),
    (dispatch) => bindActionCreators(Actions, dispatch)
)(AddProduct);