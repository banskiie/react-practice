import React from 'react'
import img from '../../assets/images/meals.jpg'

import classes from './Main.module.css'
import ContentBox from './ContentBox'
import MenuList from './MenuList'

function Main() {
  return (
    <div className={classes.main}>
      <img src={img} alt='meals' />
      <ContentBox />
      <MenuList />
    </div>
  )
}

export default Main