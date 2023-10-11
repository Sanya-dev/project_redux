

const ADD = 'ADD'
const PLUS = 'PLUS'
const MINUS = 'MINUS'
const CLEAR = 'CLEAR'
const REMOVE = 'REMOVE'

const read = () => {
    return JSON.parse(localStorage.getItem('basket')) ?? [] //если null то возвращаем пустой массив
};
const write = (data) => {
    localStorage.setItem('basket', JSON.stringify(data)) 
};

const initialState = read()
//функции для записи и чтения localeStorage

export const addAction = payload => ({type: ADD, payload})
export const addPlusAction = payload => ({type: PLUS, payload})
export const addMinusAction = payload => ({type: MINUS, payload})
export const clearBascketAction = () => ({type: CLEAR })
export const removeBascketAction = (payload) => ({type: REMOVE, payload })


export const basketReducer = (state = initialState, action) => {
    if(action.type === ADD){
        const target = state.find(({id}) => id === action.payload)
        let newState;
        if (!target){
        newState =  [...state, {id: action.payload, count: 1}]
         }else {
            target.count++
            newState =  [...state]
         }
         write(newState)
         return newState
    }else if(action.type === PLUS){
        const target = state.find(({id}) => id === action.payload)
        target.count++
        write(state)
        return [...state]
    }else if(action.type === MINUS){
        const target = state.find(({id}) => id === action.payload)
        target.count--
        const newState = target.count === 0
        ? state.filter(({id}) => id !== action.payload)
        : [...state]
        write(newState)
        return newState
    }else if(action.type === CLEAR){
        write([])
        return []
    }else if(action.type === REMOVE){
       let newState = state.filter(({id}) => id !== action.payload)
       write(newState)
       return newState
    }
        return state
}

// Добавить к id товара в корзине кол-во данного товара 
// если товар добавляется в первый раз, то указать count 1
// если такой товар уже есть то просто увеличить его count

// подтянуть данные с товарами и сформировать объект у которого будут все данные товара + count  и вывести наименовение товара и его count