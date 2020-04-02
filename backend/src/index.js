//variavel para importar o express(cuida das rotas)
const express = require('express');//pacote
const routes = require('./routes');//arquivo
const cors = require('cors');

//armazena a aplicação
const app = express();

app.use(cors());//segurança

app.use(express.json());//converte o json do corpo da requisição em um objeto do javascript

app.use(routes);
//metodo GET: BUSCAR INFORMAÇÃO DO BACK-END.
//METODO POST: ULTILIZADO PARA CRIAR UMA INFORMAÇÃO NO BACK-END.
//METODO PUT: USADO PARA ALTERAR UMA INFORMAÇÃO NO BACK-END.
//METODO DELETE: UTILIZADO PARA APAGAR UMA INFORMAÇÃO NO BACK-END.

/*
tipos de parâmetros: 


Query Params: Parâmetros nomeados enviados na rota "?" (filtros,paginação).
Route Params: Parâmetros utilizados para identificar recursos.
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
*/
/*

Driver: Select *From users
Query Builder: table('users').select('*').where()

*/




//localhost:3333 evitar choque de rotas
app.listen(3333);