import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { productListReducer } from './reducers/productReducers'

/*Combining Reducers*/
const rootReducer = combineReducers({
    productList: productListReducer
})



/* Create temporary store */
const store = configureStore({
    reducer: rootReducer,
    preloadedState: {}
})

export default store
/* hook up store in index.js(top level) */