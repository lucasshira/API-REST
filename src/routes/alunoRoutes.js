import { Router } from 'express';
// importando apenas o Router do express com destructuring
import alunoController from '../controllers/AlunoController';

const router = new Router();

router.get('/', alunoController.index);

export default router;
