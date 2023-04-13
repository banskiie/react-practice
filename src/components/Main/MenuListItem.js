import React from 'react'

import classes from './MenuListItem.module.css'
import AmountAdd from './AmountForm'

function MenuListItem(props) {
  return (
    <li className={classes['list-item']}>
      <div>
        <h2>{props.name}</h2>
        <p className={classes['list-item__desc']}>{props.desc}</p>
        <h2 className={classes['list-item__price']}>${props.price}</h2>
      </div>
      <AmountAdd id={props.id} name={props.name} desc={props.description} price={props.price} />
    </li>
  )
}

export default MenuListItem