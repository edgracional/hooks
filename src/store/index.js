import { reducer } from './reducers'


const initialState = {
    cart: [{}],
    products:[{}, {}], //poderia ter uma série de atributos {}
    user: null,
    number: 0,
}

export {
    initialState,
    reducer
   
}

