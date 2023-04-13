import React, { useState, useContext } from 'react'

import classes from './AmountForm.module.css'
import Button from '../UI/Button'
import { AuthContext } from '../../store/auth-context'

function AmountForm(props) {
  const ctx = useContext(AuthContext)
  const [value, setValue] = useState(1);

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.addTotal(value);
    const valIdx = ctx.cart.findIndex(val => val.id === props.id)
    if (valIdx !== -1) {
      ctx.cart[valIdx].quantity += 1
    } else {
      ctx.addItem({
        id: props.id,
        name: props.name,
        description: props.desc,
        price: props.price,
        quantity: value
      })
    }
  }
  return (
    <form onSubmit={submitHandler} className={classes['amount-form']}>
      <div>
        <label>Amount</label>
        <input type='number' min='0' value={value} onChange={(e) => { setValue(e.target.value) }} />
      </div>
      <Button type='submit' className={classes['amount-form-btn']}>+ Add</Button>
    </form>
  )
}

export default AmountForm