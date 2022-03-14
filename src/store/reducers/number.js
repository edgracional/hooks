export function numberReducer(state, action){
    
    switch(action.type){
        
        case 'numberAdd2':
            /* retornar um novo objeto que vai representa o estado (return), 
            clonar o estado atual (...state) e 
            criar um novo atributo number (number: state.number + 2) */
            return {...state, number: state.number +2}


        /* Desafio */
        case 'numberMulti7':
            return {...state, number: state.number * 7 }
        case 'numberDiv25':
            return {...state, number: state.number / 25 }
        case 'numberInt':
            return {...state, number: parseInt(state.number) }
        case 'numberAddN':
            return {...state, number: state.number + action.payload }

        default:
            return state
    }
}