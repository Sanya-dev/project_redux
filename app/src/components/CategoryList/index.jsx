import React from 'react'
import { useSelector } from 'react-redux'
import CategoryItem from '../CategoryItem'
import s from './index.module.css'

export default function CategoryList() {

    const { status, list } = useSelector(state => state.categories)

  return (
    <div className={s.wrapper}>
        {
           status === 'loading'
           ? <p>Идет загрузка</p>
           : status === 'error'
           ? <p>Произошла ошибка</p>
           : list.map(item => <CategoryItem key={item} props={item} />)
        }
    </div>
  )
}
