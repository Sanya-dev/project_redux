import {createStore, combineReducers, applyMiddleware } from 'redux'
import { categoryReducer } from './reducer/categoryReducer'
import thunk from 'redux-thunk'
import { productReducer } from './reducer/productReducer'
import { basketReducer } from './reducer/basketReducer'


const rootReducer = combineReducers ({
    categories: categoryReducer,
    products : productReducer,
    basket: basketReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))