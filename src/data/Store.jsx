import React, { useState } from "react";



/* Criar os dados e o contexto */
const initialState = {
    number: 123,
    text: 'Context API + Hooks'
    
}

/* Criar um contexto usando o estado inicial, criar um AppContext e exportar */
export const AppContext = React.createContext(initialState)

/* Criar uma constate que irá recerber um componente funcional (props) */
const Store = props => {
    const [state, setState] = useState(initialState)

    function updateState(key, value){
        setState({
            /* replicar o estado atual - usando operador sprade ...state */
           ...state,
           /* alterar apenas a chave especifica e não o estado inteiro */
           [key]: value
        })
    }

    /* Componente vai retornar alum trecho de jsx*/
    return (
        <AppContext.Provider value={{
            /* objeto que esta sendo compartilhado encapsulado dentro do componente store 
            - temos o estado o contexto da aplicação com número e texto e as funções para 
            alterar cada um dos atributos*/
            number: state.number,
            text: state.text,
            /* funções */
            setNumber: n => updateState('number', n),
            setText: t => updateState('text', t),
        }}>
            
                {/* passar o elementos que foram passados como filho dentro dessa div*/}
                {props.children}
           
        </AppContext.Provider>
    )
}

export default Store

