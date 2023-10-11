// const initialState = [
//    { id: 1,
//     title: 'Scott',
//     img: 'https://img.freepik.com/free-photo/white-bicycle-standing-in-park_1153-7319.jpg'
//    },
//    { id: 2,
//     title: 'Cannondale',
//     img: 'https://img.freepik.com/free-photo/white-bicycle-standing-in-park_1153-7319.jpg'
//    },
//    { id: 3,
//     title: 'Cube',
//     img: 'https://img.freepik.com/free-photo/white-bicycle-standing-in-park_1153-7319.jpg'
//    },
//    { id: 4,
//     title: 'Specialized',
//     img: 'https://img.freepik.com/free-photo/white-bicycle-standing-in-park_1153-7319.jpg'
//    },
// ]
const initialState = 
   { 
    list: [],
    status: 'loading'
   }
  




const LOAD_PRODUCT = 'LOAD_PRODUCT'
const FETCH_ALL_ERROR = '[PRODUCTS] FETCH_ALL_ERROR'
const CHECK = 'CHECK'
const SORT = 'SORT'
const PRICE = 'PRICE'
const RATE = 'RATE'

export const loadProductAction = payload => ({type: LOAD_PRODUCT, payload})
export const fetchAllErrorProductAction = payload => ({type: FETCH_ALL_ERROR, payload})
export const checkProductAction = payload => ({type: CHECK, payload})
export const sortProductAction = payload => ({type: SORT, payload})
export const priceProductAction = payload => ({type: PRICE, payload})
export const rateProductAction = payload => ({type: RATE, payload})

export const productReducer = (state = initialState, action) => {
    if(action.type === LOAD_PRODUCT){
        return {
            list: action.payload.map(item => ({...item, show: {search:true, price:true, rate:true}})),
            status: 'ready'
        }
    }else if (action.type === FETCH_ALL_ERROR){
        return {
            status: 'error'
        }
    }else if(action.type === CHECK){
    //    return state.map(({list}) => list.title.startsWith(action.payload) ? true : false)
    return {
        ...state, 
        list: state.list.map(item => ({...item, show: {
            ...item.show,
            search: item.title.startsWith(action.payload)
        }}))
    }
    }else if(action.type === PRICE){
        const {min, max} = action.payload
        return {
            ...state, 
            list: state.list.map(item => ({...item, 
                show: {
                ...item.show,
                price: item.price >= min && item.price <= max
            }}))
        }
    }else if(action.type === RATE){
        // const {false, true} = action.payload
       state.list =  state.list.map(item => {
         item.show.rate = action.payload ?(item.rating.rate) >= 4 : true
            return item
            })
        return {...state}
    }
    else if(action.type === SORT){
    //    return state.sort((a,b) => a.action.payload > b.action.payload)
        if(action.payload === 'price'){
            return {
                ...state, 
                list: [...state.list.sort((a,b) => a.price - b.price)]
            } 
        }else if(action.payload === 'rate'){
            return {
                ...state, 
                list:  state.list.sort((a,b) => a.rating.rate - b.rating.rate)
            }
        }
         else if(action.payload === 'title'){
            return  {
                ...state, 
                list:  [...state.list.sort((a,b) => a.title.localeCompare(b.title))]
            }
            
        }
    }
    return state
}