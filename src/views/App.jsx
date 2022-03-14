import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router } from  'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

import DataContext, { data } from '../data/DataContext'
import Store from './../data/Store';


const App = props => {
    const [state, setState] = useState(data)

    return (
        <Store>
                                                {/* disponibilizando a função setState estaremos possibilitando 
                                                todo componente de instruir o estado inteiro da aplicação no store 
                                                foi melhorado colocando valores e funções para alterar cada um dos 
                                                atributos individualemnte  */}
            <DataContext.Provider value={{state, setState}}>

                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </DataContext.Provider> 
        </Store>
        
    )            
}

export default App