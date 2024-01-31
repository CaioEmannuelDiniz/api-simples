import express, {Request, Response} from "express";
import path from 'path';
import dotenv from 'dotenv';


import apiRoutes from "./routes/api";


//configurar de acordo com arquivo .env
dotenv.config();

//atribuindo a constante server ao express
const server = express();

//para pegar o endereço da pasta estatica
server.use(express.static(path.join(__dirname,'../public')));
//para pegar envio via post
server.use(express.urlencoded({extended: true}));

//chama o arquivo de rotas da api com um prefixo antes /api
server.use('/api',apiRoutes);


//para ir para rota da pagina não encontrada famoso 404
server.use((req:Request ,res:Response)=>{
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});

});

//startando o server pela porta no arquivo env
server.listen(process.env.PORT);