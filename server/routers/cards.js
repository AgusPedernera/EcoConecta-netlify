import express from 'express';

import controller from '../controllers/cards.js';

const router = express.Router();

router.get('/compra/', controller.getCardsCompra);
router.get('/dona/', controller.getCardsDona);
router.get('/dona/ropa', controller.getCardsDonaRopa);
router.get('/dona/alimentos', controller.getCardsDonaAlimentos);
router.get('/dona/utiles', controller.getCardsDonaUtiles);
router.get('/dona/libros', controller.getCardsDonaLibros);
router.get('/dona/medicamentos', controller.getCardsDonaMedicamentos);
router.get('/dona/juguetes', controller.getCardsDonaJuguetes);
router.get('/compra/ropa', controller.getCardsCompraRopa);
router.get('/compra/cosmetica', controller.getCardsCompraProductos);
router.get('/compra/decoHogar', controller.getCardsCompraDecoHogar);
router.get('/compra/libros', controller.getCardsCompraLibros);
router.get('/compra/ferias', controller.getCardsCompraFerias);
router.get('/compra/juguetes', controller.getCardsCompraJuguetes);


router.get('/:id', controller.getCard);

export default router