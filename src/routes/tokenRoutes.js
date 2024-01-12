import { Router } from 'express';
// importando apenas o Router do express com destructuring
import tokenController from '../controllers/TokenController';

const router = new Router();

router.post('/', tokenController.store);

export default router;
