import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { addAction } from '../../store/reducer/basketReducer'


export default function ProductstItem({id,title, image, price, rating}) {

  const dispatsch = useDispatch()

  return (
    <div className={s.item}>
        <img src={image} alt="" />
        <p>{title}</p>
     

        <div className={s.elem}>
        <p>{price} </p> 
        <p>{rating.rate} ({rating.count})</p>
        <button onClick={() => dispatsch(addAction(id))}>Добавить</button>
        </div>

    </div>
  )
}
