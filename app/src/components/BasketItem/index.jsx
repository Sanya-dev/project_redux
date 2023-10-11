import React from 'react'
import { useDispatch } from 'react-redux'
import { addMinusAction, addPlusAction, removeBascketAction } from '../../store/reducer/basketReducer';
import s from './style.module.css'

export default function BasketItem({id, image, price, title, count}) {
     const dispatch = useDispatch();
  return (
    <div >
        <div className={s.container_item}>
        <img src={image} alt="" />
        <p>{title}</p>
        <p>{price} x {count} = {+(price * count).toFixed(2)} </p>
        <div>
            <button onClick={() => dispatch(addPlusAction(id))}>+</button> <br></br>
            <button onClick={() => dispatch(addMinusAction(id))}>-</button>
        </div>
        <button onClick={() => dispatch(removeBascketAction(id)) }  >Удалить товар</button>
        </div>
      
    </div>
  )
}
