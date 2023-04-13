import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../store/auth-context'

import classes from './CartItems.module.css'
import Button from '../UI/Button'

function CartItems() {
  const ctx = useContext(AuthContext)
  const [pageChange, setPageChange] = useState(false)

  const increment = (id) => {
    const Idx = ctx.cart.findIndex(val => val.id === id)
    ctx.cart[Idx].quantity += 1
    ctx.addTotal(1)
    setPageChange(!pageChange)
  }

  const decrement = (id) => {
    const Idx = ctx.cart.findIndex(val => val.id === id)
    ctx.cart[Idx].quantity -= 1
    ctx.addTotal(-1)
    setPageChange(!pageChange)
  }

  useEffect(() => { }, [ctx.cart])

  return (
    <ul>
      {ctx.cart.map(item => item.quantity > 0 ?
        <li key={item.id} className={classes['list-item']}>
          <div>
            <h1>{item.name}</h1>
            <div className={classes['list-item__value']}>
              <p className={classes['list-item__price']}>${item.price}</p>
              <p className={classes['list-item__quantity']}>x {item.quantity}</p>
            </div>
          </div>
          <div className={classes.actions}>
            <Button className={classes.dec} onClick={() => { decrement(item.id) }}> - </Button>
            <Button className={classes.inc} onClick={() => { increment(item.id) }}> + </Button>
          </div>
        </li>
        : null
      )}
    </ul >
  )
}

export default CartItems