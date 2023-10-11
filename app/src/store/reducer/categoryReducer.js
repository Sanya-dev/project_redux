

// const initialState = ["electronics","jewelery","men's clothing","women's clothing"]

const initialState = 
   { 
    list: [],
    status: 'loading'
   }
  
const LOAD = 'LOAD'
const FETCH_ALL_ERROR = '[CATEGORY] FETCH_ALL_ERROR'



export const loadAction = payload => ({type: LOAD, payload})
export const fetchAllErrorCategoryAction = payload => ({type: FETCH_ALL_ERROR, payload})


export const categoryReducer = (state = initialState, action) => {
    if(action.type === LOAD){
        return {
            list: action.payload,
            status: 'ready'
        }
    }else if (action.type === FETCH_ALL_ERROR){
        return {
            status: 'error'
        }
    }
    return state
}






