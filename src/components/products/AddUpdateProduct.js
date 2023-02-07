import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {getCategories} from "../../redux/actions/categoryActions"
import {getProducts, saveProduct} from "../../redux/actions/productActions"
import ProductDetail from "./ProductDetail";

function AddUpdateProduct({
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    history,
    ...props
}){
    const [product, setProduct] = useState({ ...props.product });
    useEffect(() => {
        if(categories.length === 0) {
            getCategories();
        }
        setProduct({ ...props });
    }, [props.product]);

    function handleChange(event){
        // debugger;
        const {name, value} = event.target;
        setProduct(previousProduct => ({
            ...previousProduct,
            [name]: name === "categoryId" ? parseInt(value, 10) : value
        }));
    }

    function handleSave(event) {
        debugger;
        event.preventDefault();
        saveProduct(product).then(() => {
            history.push("/")
        });
    }

    return(
        <ProductDetail product={product} categories={categories} onChange={handleChange} onSave={handleSave}></ProductDetail>
    )
}

export function getProductById(products, productId) {
    debugger;
    let product = products.find(product => product.id == productId) || null;
    return product;
}

function mapStateToProps(state, ownProps){
    // const productId = ownProps.match.params.productId;
    debugger;
    const queryParameters = new URLSearchParams(window.location.search)
    console.log(queryParameters.get("productId"));
    // const productId = ownProps.productId;
    const productId = queryParameters.get("productId");
    const product = productId && state.productListReducer.length > 0 ? getProductById(state.productListReducer, productId) : {}

    return {
        product, 
        products: state.productListReducer,
        categories: state.categoryListReducer
    }
}

const mapDispatchToProps = {
    getCategories, saveProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUpdateProduct)