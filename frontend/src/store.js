import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { productDetailsReducer, productListReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

/*Combining Reducers*/
const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem( 'cartItems')) : []

const initialState = {
    cart: {cartItems: cartItemsFromStorage}
}

/* Create temporary store */
const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState
})

export default store
/* hook up store in index.js(top level) */