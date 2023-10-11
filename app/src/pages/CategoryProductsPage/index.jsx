import React from 'react'
import { useParams } from 'react-router-dom';

export default function CategoryProductsPage() {

    const { category } = useParams();


  return (
    <div>
        <h2>{category}</h2>
    </div>
  )
}
