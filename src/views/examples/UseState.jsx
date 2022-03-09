import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from './../../components/layout/SectionTitle';

const UseState = (props) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")



    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"/>

        <SectionTitle title="Exercício #01"/>
            <div className="center">
                {/*usamos span mostrar o valor */}
                <span className="text">{count}</span>
                <div>
                    {/*botões para alterar o valor */}
                    <button className="btn"
                        onClick={() => setCount(count -1)}>-1</button>
                    <button className="btn"
                        onClick={() => setCount(count +1)}>+1</button>
                    <button className="btn"
                    /* outra forma de fazer usando calback */
                        onClick={() => setCount(currect => + 1000)}>+1000 </button>
                </div>
            
            </div>
        <SectionTitle title="Exercício #02"/>
        {/*usamos input para controlar a evolução do input*/}
        <input type="text" className="input" 
            value={name} oneChange={e => setName(e.target.value)} />
            <span className='text'>{name}</span>          
        </div>
    )
}

export default UseState


/* 
    Foram feitos 2 exemlos com  useStates: 

        Controlando um valor numérico 
        const [count, setCount] = useState(0)

        Controlando um valor textual
        const [name, setName] = useState("")
*/