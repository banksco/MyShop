import axios from 'axios'
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../constants/productConstants"
import { USER_LOGOUT } from '../constants/userConstants'

export const listProducts = () => async (dispatch) => {
  try{
    dispatch({
      type: PRODUCT_LIST_REQUEST
    })
    const {data} = await axios.get('/api/products')
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data
    })
  } catch (error){
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: 
        error.response && error.response.data.message ?
          error.response.data.message : error.message
    })
  }
}

export const listProductDetails = (id) => async (dispatch) => {
  try{
    dispatch({
      type: PRODUCT_DETAILS_REQUEST
    })
    const {data} = await axios.get(`/api/products/${id}`)

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data
    })

  } catch (error){
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: 
        error.response && error.response.data.message ?
          error.response.data.message : error.message
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItems('userInfo')
  dispatch({
    type: USER_LOGOUT
  })
}