import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export function addToCart(cartItem) {
    return {
        type: ADD_TO_CART,
        payload:cartItem
    }
}

export function removeFromCart(product) {
    return {
        type: REMOVE_FROM_CART,
        payload:product
    }
}