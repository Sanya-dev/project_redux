import React from 'react'
import FilterContainer from '../../components/FilterContainer'
import ProductstList from '../../components/ProductstList'
import { useParams } from 'react-router-dom'

export default function Products() {
  
  const { category } = useParams();

  
  return (
    <div>
            <h2>{category}</h2>
            <FilterContainer />
            <ProductstList category={category} />
    </div>
  )
}
