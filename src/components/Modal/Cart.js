import React, { useContext } from 'react'
import { AuthContext } from '../../store/auth-context'

import classes from './Cart.module.css'
import CartItems from './CartItems'
import Button from '../UI/Button'

function Cart(props) {
  const ctx = useContext(AuthContext)
  return (
    <>
      <CartItems />
      <div className={classes.total}>
        <h1>Total Amount</h1>
        <h1>${ctx.totalPrice}</h1>
      </div>
      <div className={classes.actions}>
        <Button className={classes.cancel} onClick={props.onClick}>Cancel</Button>
        <Button className={classes.order} onClick={() => { console.log('Ordering...') }}>Order</Button>
      </div>
    </>
  )
}

export default Cart