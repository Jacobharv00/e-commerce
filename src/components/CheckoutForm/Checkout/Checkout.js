import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from '@material-ui/core'
import useStyles from './styles'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import { commerce } from '../../../lib/commerce'
import { Link, useNavigate } from 'react-router-dom'


const steps = [ 'Shipping address', 'Payment details' ]

const Checkout = ( { cart, order, onCaptureCheckout, error } ) => {
  const [ activeStep, setActiveStep ] = useState( 0 )
  const [ checkoutToken, setCheckoutToken ] = useState( null )
  const [ shippingData, setShippingData ] = useState( {} )
  const classes = useStyles()
  const navigate = useNavigate()

  useEffect( () => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken( cart.id, { type: 'cart' } )
        // console.log( 'TOKEN!', token )
        setCheckoutToken( token )
      } catch ( error ) {
        navigate( '/' )
      }
    }
    generateToken()
  }, [ cart ] )

  const nextStep = () => setActiveStep( ( prevActiveStep ) => prevActiveStep + 1 )
  const backStep = () => setActiveStep( ( prevActiveStep ) => prevActiveStep - 1 )

  const next = ( data ) => {
    setShippingData( data )
    nextStep()
  }

  let Confirmation = () => order.customer ? (
    <>
      <div>
        <Typography variant='h5'>
          Thank you for your purchase,
          { order.customer.firstname } { order.customer.firstname }
        </Typography>
        <Divider className={ classes.divider } />
        <Typography variant='subtitle2'>
          Order Ref: { order.customer_reference }
        </Typography>
      </div>
      <br />
      <Button
        variant='outlined'
        type='button'
        component={ Link }
        to='/'
      >
        Back To Home
      </Button>
    </>
  ) : (
    <div className={ classes.spinner }>
      <CircularProgress />
    </div>
  )

  if ( error ) {
    <>
      <Typography variant='h5'>Error: { error }</Typography>
      <br />
      <Button
        variant='outlined'
        type='button'
        component={ Link }
        to='/'
      >
        Back To Home
      </Button>
    </>
  }

  const Form = () => activeStep === 0
    ? <AddressForm checkoutToken={ checkoutToken } next={ next } />
    : <PaymentForm
      shippingData={ shippingData }
      checkoutToken={ checkoutToken }
      backStep={ backStep }
      nextStep={ nextStep }
      onCaptureCheckout={ onCaptureCheckout }
    />

  return (
    <>
      <CssBaseline />
      <div className={ classes.toolbar } />
      <main className={ classes.layout }>
        <Paper className={ classes.paper }>
          <Typography variant='h4' align='center'>
            Checkout
          </Typography>
          <Stepper activeStep={ activeStep } className={ classes.stepper }>
            { steps.map( step => (
              <Step key={ step }>
                <StepLabel>{ step }</StepLabel>
              </Step>
            ) ) }
          </Stepper>
          { activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form /> }
        </Paper>
      </main>
    </>
  )
}

export default Checkout
