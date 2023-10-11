import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom'

export default function CategoryItem({props}) {
  return (
    <Link to={`/products/${props}`} className={s.item}>
        <p>{props}</p>
    </Link>
  )
}
