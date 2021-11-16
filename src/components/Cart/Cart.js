import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles'
import CartItem from './CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = ( { cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart } ) => {
  const classes = useStyles()

  const EmptyCart = () => (
    <Typography variant='h2' style={ { fontFamily: 'Merienda, cursive' } }>
      You have no items in your shopping cart.😿
      <Link to='/' className={ classes.link }>
        <Button
          size='medium'
          type='button'
          variant='contained'
          className={ classes.emptyButton }
        >
          Start Adding Some!
        </Button>
      </Link>
    </Typography>
  )

  const FilledCart = () => (
    <>
      <Grid container spacing={ 3 }>
        { cart.line_items.map( item => (
          <Grid item xs={ 12 } sm={ 4 } key={ item.id }>
            <CartItem
              item={ item }
              onUpdateCartQty={ handleUpdateCartQty }
              onRemoveFromCart={ handleRemoveFromCart }
            />
          </Grid>
        ) ) }
      </Grid>
      <div className={ classes.cardDetails }>
        <Typography variant='h4' style={ { fontFamily: 'Merienda, cursive', } }>
          Subtotal: { cart.subtotal.formatted_with_symbol }
        </Typography>
        <div>
          <Button className={ classes.emptyButton } size='large' type='button' variant='contained' color='secondary' onClick={ handleEmptyCart }>
            Empty Cart
          </Button>
          <Button
            component={ Link }
            to='/checkout'
            className={ classes.checkoutButton }
            size='large'
            type='button'
            variant='contained'
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  )

  if ( !cart.line_items ) return 'Loading...'

  return (
    <Container className={ classes.titles }>
      <div className={ classes.toolbar } />
      <Typography className={ classes.title } variant='h1' gutterBottom>
        Shopping Cart
      </Typography>
      { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
    </Container>
  )
}

export default Cart
