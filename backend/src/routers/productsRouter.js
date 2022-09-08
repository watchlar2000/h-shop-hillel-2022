import { Router } from 'express';
import {
  productsAll,
  productsFashion,
  productsShoes,
  productsAccessories,
  productSpecific,
} from '../controllers/productsController.js';

const router = Router();

router.get('/', productsAll);

router.get('/fashion', productsFashion);

router.get('/shoes', productsShoes);

router.get('/accessories', productsAccessories);

router.get('/:id', productSpecific);

export const prodRouter = router;
