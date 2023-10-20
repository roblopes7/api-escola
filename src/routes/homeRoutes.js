import { Router } from 'express';

import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);

export default router;

/*
* Tabela de padrões para seguir de acordo com o curso
*
* index -> lista todos registros
* create ou store -> cria um novo registro
* delete -> remove um registro
* show -> consulta(exibe) um registro
* update -> atualiza um registro
*/
