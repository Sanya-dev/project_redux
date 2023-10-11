import { fetchAllErrorCategoryAction, loadAction } from "../store/reducer/categoryReducer"


export const fetchCategory = async (dispatch) => {
    try{
        const resp = await fetch('https://fakestoreapi.com/products/categories')
        const data = await resp.json();
         dispatch(loadAction(data))
    }catch{
        dispatch(fetchAllErrorCategoryAction())
    }
}