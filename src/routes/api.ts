import {Router} from 'express';

import * as apiController from '../controllers/apiController'

const router = Router();

//rota padrao para testar a api
router.get('/ping',apiController.ping);

//rota que gera um numero aleatorio
router.get('/random',apiController.random);

//rota que gera uma frase com o nome informado
router.get('/nome/:nome',apiController.nome);



export default router;