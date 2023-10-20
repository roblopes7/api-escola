import { Router } from 'express';

import userController from '../controllers/UserController';

const router = new Router();

router.post('/store', userController.store);

export default router;
