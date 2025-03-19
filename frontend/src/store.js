import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { productDetailsReducer, productListReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer } from './reducers/userReducers'

/*Combining Reducers*/
const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem( 'cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress'))
: {}

const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod'))
: {}

const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAdress: shippingAddressFromStorage, 
        paymentMethod: paymentMethodFromStorage
    },
    userLogin: {userInfo: userInfoFromStorage}
}

/* Create temporary store */
const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState
})

export default store
/* hook up store in index.js(top level) */