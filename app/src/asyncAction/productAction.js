import { fetchAllErrorProductAction, loadProductAction } from "../store/reducer/productReducer"

export const fetchProduct = async (dispatch) => {
    try{
        const resp = await fetch('https://fakestoreapi.com/products');
        const data = await resp.json();
        dispatch(loadProductAction(data));
    }catch{
        dispatch(fetchAllErrorProductAction());
    }
}


// fetch('https://fakestoreapi.com/products')
//         .then(
//             resp => resp.json(),
//             () => dispatch(fetchAllErrorProductsAction())
//         )
//         .then(data => dispatch(fetchAllProductsAction(data)))
// resolve => reject