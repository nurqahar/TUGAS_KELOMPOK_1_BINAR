import express from 'express';
import { showMenu} from './controllers/menuControllers.mjs';
import { showOrders, createOrder } from './controllers/orderControllers.mjs';


const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/menu', showMenu);
router.get('/orders', showOrders);
router.post('/orders', createOrder);

export default router;
