import axios from "axios";
import { ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS } from "../constants/orderConstants";

//Post API - Creating new data
export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ORDER_CREATE_REQUEST
        })


        // from the store get user login (similar to useSelector Hook)    
        const {userInfo} = getState().userLogin 
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userInfo.token}`
            }
        }

        // deconstruct the data back from the axios
        // three parameters route, data, config  
        const {data} = await axios.post('/api/orders/', order, config)
        dispatch({
            type: ORDER_CREATE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload:  error.response && error.response.data.message ?
            error.response.data.message : error.message
        })
    }
}

//get API 
export const getOrderDetails = (id) => async (dispatch, getState) => {
    try{
        dispatch({
            type: ORDER_DETAILS_REQUEST
        })

        const {userInfo} = getState().userLogin
        const config = {
            headers: {
                'Authorization': `Bearer ${userInfo.token}`
            }
        }
        // Make the call 
        const {data} = await axios.get(`/api/orders/${id}`, config)

        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            payload: data
        })

    }catch (error) {
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload:  error.response && error.response.data.message ?
            error.response.data.message : error.message
        })
    }
}

// PUT API (updating existing data)
// When PayPal completes the payment
export const payOrder = (orderId, paymentResult) => async (dispatch, getState) => {
    try{
        dispatch({
            type:ORDER_PAY_REQUEST
        })

        const {userInfo} = getState().userLogin
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userInfo.token}`
            }
        }

        //Make request to axios call 
        const {data} = await axios.put(`/api/orders/${orderId}/pay`, paymentResult, config)

        dispatch({
            type: ORDER_PAY_SUCCESS,
            payload: data
        })

    }catch (error) {
        dispatch({
            type: ORDER_PAY_FAIL,
            payload:  error.response && error.response.data.message ?
            error.response.data.message : error.message
        })
    }
}