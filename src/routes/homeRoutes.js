import { Router } from 'express';
// importando apenas o Router do express com destructuring
import homeController from '../controllers/HomeController';

const router = new Router();

router.get('/', homeController.index);

export default router;
