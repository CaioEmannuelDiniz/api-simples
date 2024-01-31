import {Router} from 'express';

const router = Router();

//rota padrao para testar a api
router.get('/ping',(req,res)=>{
    res.json({pong: true});
});

//rota que gera um numero aleatorio
router.get('/random',(req,res)=>{
    let nRand: number = Math.floor(Math.random()*10);

    res.json({JSON: nRand});
});

router.get('/nome/:nome',(req,res)=>{
    let nome:string = req.params.nome;
    res.json({nome:`Você enviou o nome: ${nome}`});
});



export default router;