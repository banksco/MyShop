import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"
import axios from "axios"

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name, 
            image: data.image,
            price: data.price, 
            countInStock: data.countInStock,
            //key and value name are the same just write it once 
            qty
        }
    })  

    // add into local (browser) storage
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

}

export const removeFromCart = (id) => async ( dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM, 
        payload: id
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}