import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

/* quando a aplicação carrega pela primeira vez ira carregar este estado incial - 
a partir do estado inicial você vai evoluir este estado -  evoluindo o valor do 
número, colecar o usuário logado..etc;*/

/* Tem outras formas de evoluir o estado não apenas dentro de uma função */
const initialState = {
    /* estado inicial */
    cart: [{}],
    products:[{}, {}], //poderia ter uma série de atributos {}
    user: null,
    // foco...
    number: 0,
}
/* reducer vai receber o estado atual, ou seja a ultima versão disponível a mais 
atual do estado e vai receber também uma action - uma ação, toda ação tem nome, 
tem título...*/
function reducer(state, action){
    /* switch que é o padrão - mais comum */
    /* toda ação tem pelo menos o atributo titulo - action.type */
    switch(action.type){
        /* criar uma ação adicionar 2 */
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



        /* Vai retornar um valor default - caso você tenha passado uma ação 
        que não foi mapeada retorne o estdo atual (return) */  
        
        case 'login':
            return { ...state, user: { name: action.payload } }
        default:
            return state
    }
}

const UseReducer = (props) => {
    /* Criando o useReduce - criar o estado e a função dispatch (disparar uma ação) - chamar o = 
    useReducer - passar a função que vai evoluir o estado (reducer) 
    e passar o esatdo inicial para useRducer*/
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"/>

            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Sem usuário</span>
                }
                
                <span className="text">{state.number}</span>
                <div>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'login', payload: 'Maria' })}>Login</button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'numberAdd2' } )}>+2</button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'numberMulti7' })}>*7</button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'numberDiv25' } )}>/25</button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'numberInt' } )}>Int</button>
                    <button 
                        className="btn"
                        onClick={() => dispatch({ type: 'numberAddN', payload: - 9 } )}>-9</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer



/* colocar de forma fixa o nome

case 'login':
            return { ...state, user: { name: 'leonardo' } }
        default:
            return state 
            
*/