import React from 'react'
import { useSelector } from 'react-redux'
import BasketItem from '../BasketItem'
import s from './style.module.css'
import BasketCalculation from '../BasketCalculation'

export default function BasketContainer() {

    const basket = useSelector(state => state.basket)
    const { list } = useSelector(state => state.products)
    const result = basket.map(item => {
        const product = list.find(({id}) => id === item.id)
        return {...item, ...product}
    })
    // console.log(result);

  return (
    <div className={s.container}>
        {
        result.map(item => <BasketItem key={item.id} {...item} />)
        }
        <BasketCalculation result={result}/>
    </div>
  )
}
