import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'


const ShippingScreen = () => {

  // read from the redux store 
  const {shippingAddress} = useSelector((state) => state.cart)

  // local state variables to bind to the textbox 
  const[address, setAddress] = useState(shippingAddress.address)
  const[city, setCity] = useState(shippingAddress.city)
  const[postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const[country, setCountry] = useState(shippingAddress.country)

  // naviagte & dispatch
  const naviagte = useNavigate()
  const dispatch = useDispatch()

  // get the event variabe (e), dispatch the action to pass the data as an object
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({address, city, postalCode, country}))
    naviagte('/payment')
  }

return (
    <FormContainer>
       <CheckoutSteps step1 step2 />
       <h1>Shipping</h1>
       <Form onSubmit={submitHandler}>
         <Form.Group controlId='address'>
           <Form.Label>Address</Form.Label>
           <Form.Control
             type='text'
             placeholder='Enter address'
             value={address}
             required
             onChange={(e) => setAddress(e.target.value)}
           ></Form.Control>
         </Form.Group>
         <Form.Group controlId='city'>
           <Form.Label>City</Form.Label>
           <Form.Control
             type='text'
             placeholder='Enter city'
             value={city}
             required
             onChange={(e) => setCity(e.target.value)}
           ></Form.Control>
         </Form.Group>
         <Form.Group controlId='postalCode'>
           <Form.Label>Postal Code</Form.Label>
           <Form.Control
             type='text'
             placeholder='Enter postal code'
             value={postalCode}
             required
             onChange={(e) => setPostalCode(e.target.value)}
           ></Form.Control>
         </Form.Group>
         <Form.Group controlId='country'>
           <Form.Label>Country</Form.Label>
           <Form.Control
             type='text'
             placeholder='Enter country'
             value={country}
             required
             onChange={(e) => setCountry(e.target.value)}
           ></Form.Control>
         </Form.Group>
         <Button type='submit' variant='primary'>
           Continue
         </Button>
       </Form>
     </FormContainer>   
  )
}

export default ShippingScreen