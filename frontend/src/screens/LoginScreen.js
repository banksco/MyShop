import React, {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { Form, Button, Col, Row } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { login } from '../actions/userActions'


const LoginScreen = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // form inputs - start empty 
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState('')

    // Optional redirect to shippping or to home
    const redirect = location.search ? location.search.split('=')[1] : '/'
  
    // Redux Flow: read from the state back w/ use selector
    const userLogin = useSelector((state) => state.userLogin)
    const {loading, error, userInfo} = userLogin

    useEffect(() => {
        if(userInfo){
            navigate(redirect)
        }
    // dependencies of the use Effecr     
    }, [navigate, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

  
    return (
        <FormContainer>
          <CheckoutSteps step1 />
          <h1>Sign In</h1>
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type='submit' variant='primary'>
              Sign In
            </Button>
          </Form>
          <Row className='py-3'>
            <Col>
              New Customer?{' '}
              <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                Register
              </Link>
            </Col>
          </Row>
        </FormContainer>
      )
    }
    
    export default LoginScreen