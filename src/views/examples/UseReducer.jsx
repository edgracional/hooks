import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store';
import { numberAdd2, login } from '../../store/actions'



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
                        onClick={() => login(dispatch, 'joão')}>Login</button>
                    <button 
                        className="btn"
                        onClick={() => numberAdd2(dispatch)}>+2</button>
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