import React, { useEffect, useState } from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux';
import { checkProductAction, priceProductAction, rateProductAction, sortProductAction } from '../../store/reducer/productReducer';
import Checkbox from '../UI/Checkbox';

export default function FilterContainer() {

  const dispatch = useDispatch()

 const searchHandler = ({target}) => {
  dispatch(checkProductAction(target.value));
 }
//вариант Гайка
 const sortOptions = [
  {id: 1, value: 'price', label: 'цена'},
  {id: 2, value: 'title', label: 'название'},
  {id: 3, value: 'rate', label: 'рейтинг'},
 ]

 const selectHandler = e => {
  dispatch(sortProductAction(e.target.value));
 }

 const [price, setPrice] = useState({
  min: 0,
  max: Infinity
 })

 const minPriceHandler = ({target}) => {
  setPrice({...price, min: +target.value})
 }

 useEffect(
  () => {dispatch(priceProductAction(price))},
  [price]
 );


//  const [checked, setChecked] = useState(false);

 const handleChange = ({target}) => {
   dispatch(rateProductAction(target.checked));
   console.log(target.checked);

 };
  return (
    <div className={s.container}>
        <input onChange={searchHandler} placeholder='Поиск' type="text" name='text' />
        <select onChange={selectHandler}>
          {/* <option value='default'>по умолчанию</option>
          <option value='price'>цена</option>
          <option value='title'>название</option>
          <option value='rate'>рейтинг</option> */}
          {
            sortOptions.map(({id, value, label}) => 
            <option key={id} value={value} label={label}></option>
            )
          }
        </select>
        <div>
        <input type="number" placeholder='min' onChange={minPriceHandler} />
        <input type="number" onChange={event => setPrice({...price, max: +(event.target.value || Infinity )})} placeholder='max'  />
        </div>
        <Checkbox label={'Выбор покупателя'}  onChange={handleChange}/>
        {/* <div className={s.checked} >
        <label>
        <input type="checkbox" 
          checked={checked}
          onChange={handleChange} />
        Выбор покупателя
      </label>
        </div> */}
    </div>
  )
}


// ?? - оператор нулевого слияния

// если значение слева от оператора null или undefined, то выведет справа

//  || -

// если значение слева от оператора true, то выведет слева (всё выражение будет true)

// если значение слева от оператора false, то выведет справа (true либо false в зависимости от того что справа)

// && -

// если значение слева от оператора false, то вернет false и на правое значение он не посмотрит

// если левое true, то выведет справа