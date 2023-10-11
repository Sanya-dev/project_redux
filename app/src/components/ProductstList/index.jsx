import React from 'react'
import { useSelector } from 'react-redux'
import ProductstItem from '../ProductstItem'
import s from './index.module.css'

export default function ProductstList({category}) {

    const {status, list} = useSelector(state => state.products)

    // const arrAfterFilter = list.filter(({show}) => Object.values(show).every(item => item))

    const output_category = category 
    ? list.filter(item => item.category === category)
    : list
    // show.search && show.price

    
  return (
    <div className={s.wrapper}>
        {
          status === 'loading'
          ? <p>Идет загрузка</p>
          : status === 'error'
          ? <p>Произошла ошибка</p>
          : output_category
          .filter(({show}) => Object.values(show).every(item => item))
          .map(el => <ProductstItem key={el.id} {...el}/>)
        }
    </div>
  )
}
