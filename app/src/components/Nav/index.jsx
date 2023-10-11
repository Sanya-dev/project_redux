import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './index.module.css'

export default function Nav() {

    const classFunction = ({isActive}) => isActive ? s.active : ''

  return (
    <nav className={s.nav}>
        <NavLink className={classFunction} to= '/'>Category</NavLink>
        <NavLink className={classFunction} to= '/products'>Products</NavLink>
        <NavLink className={classFunction} to= '/basket'>Basket</NavLink>
    </nav>
  )
}


// 1) /products/<название категории>
// при переходе на страницу с товарами категории отображать название категории на экране