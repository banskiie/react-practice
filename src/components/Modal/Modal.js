import React, { useContext } from 'react'
import ReactDOM from 'react-dom'

import classes from './Modal.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import Cart from './Cart'
import { AuthContext } from '../../store/auth-context'

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClick}></div>
}

function CartModal(props) {
  const ctx = useContext(AuthContext)
  return (
    <>
      {ctx.cart.length > 0 && ctx.total > 0 ?
        <Card className={classes.overlay}>
          <Cart onClick={props.onClick} />
        </Card>
        :
        <Card className={classes.empty}>
          <h1>
            There are no items in your cart.
          </h1>
          <Button className={classes['empty-btn']} onClick={props.onClick}>Okay</Button>
        </Card>
      }
    </>
  )
}

function Modal(props) {
  return (
    <div className={classes.modal}>
      <Backdrop onClick={props.onClick} />
      <CartModal onClick={props.onClick} />
    </div>
  )
}

export default Modal