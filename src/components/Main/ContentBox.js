import React from 'react'

import classes from './ContentBox.module.css'
import Card from '../UI/Card'

function Content() {
  return (
    <Card className={classes['content-box']}>
      <h1>Delicious Food, Delivered To You</h1>
      <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.
        <br />
        <br />
        All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
    </Card>
  )
}

export default Content