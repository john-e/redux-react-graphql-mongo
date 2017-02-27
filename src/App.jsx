import React from 'react';
import { Link } from 'react-router';
import * as Actions from './actions';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class App extends React.Component {

    componentDidMount() {
        let { fetchProducts } = this.props;
        fetchProducts();
    }

    render() {
        let loading = '';
        if(this.props.isloading) {
            loading = <div className="loading"></div>;
        }
        return <div className="store">
            <Link to='/'><h1>Products</h1></Link>
            <Link to='/add-product' activeClassName="test">Add Product</Link>
            {this.props.children}
            {loading}
        </div>;
    }
}

export default connect(
    (state) => ({ isloading: state.main.isloading }),
    (dispatch) => bindActionCreators(Actions, dispatch)
)(App);