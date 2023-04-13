import React from 'react'
import Card from '../UI/Card'
import MenuListItem from './MenuListItem'
import classes from './MenuList.module.css'

const FOOD_ITEMS = [
  {
    id: 1,
    name: 'Sushi',
    description: 'Finest First and veggies',
    price: 22.99
  },
  {
    id: 2,
    name: 'Schnitzel',
    description: 'A German specialty',
    price: 22.99
  },
  {
    id: 3,
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99
  },
  {
    id: 4,
    name: 'Green Bowl',
    description: 'Healthy... and GREEN!',
    price: 18.99
  }
]

function MenuItems() {
  return (
    <Card className={classes['menu-items']}>
      <ul>
        {
          FOOD_ITEMS.map(item =>
            <MenuListItem
              key={item.id}
              id={item.id}
              name={item.name}
              desc={item.description}
              price={item.price}
            />
          )
        }
      </ul>
    </Card>
  )
}

export default MenuItems