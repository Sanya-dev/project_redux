import './App.css';
import { fetchCategory } from './asyncAction/categoryAction';
import { fetchProduct } from './asyncAction/productAction';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import Category from './pages/Category';
import Products from './pages/Products';
import BasketPage from './pages/BasketPage';
import Nav from './components/Nav';


function App() {

  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchCategory)
    dispatch(fetchProduct)
  }, [dispatch])


 

  return (
    <div>
      <Nav />
     <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/products/:category" element={<Products/>} />
        <Route path="/basket" element={<BasketPage/>} />
      </Routes>
    </div>
  );
}

export default App;
