import React, { useState } from 'react'
import s from './style.module.css'
import { useDispatch} from 'react-redux'
import { clearBascketAction } from '../../store/reducer/basketReducer'
import Checkbox from '../UI/Checkbox'

export default function BasketCalculation({result}) {

  const [showPrice, setShowPrice] = useState(false)


    const sum = result.reduce((acc, {price, count}) => acc + (price * count), 0)

   const dispatch = useDispatch()

  return (
    <div className={s.container}>
        <div>
          {showPrice && <p>Итого : {(sum).toFixed(2)}</p>}
       
        <Checkbox onChange={({target}) => setShowPrice(target.checked)} label={'показать цену'}/>
        </div>
        <button onClick={() => dispatch(clearBascketAction())}>Очистить корзину</button>
    </div>
  )
}
