/* Arquivo user.js servira para gerar ações dentro de um dusuário
 ou seja, todas as ações do usuáro são colocadas aqui no user.js*/
 
 export function login(dispatch, name) {
    dispatch({ type: 'login', payload: name })
 }