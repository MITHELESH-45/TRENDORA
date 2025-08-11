import express from 'express';
import ProductController from '../controllers/ProductController.js';
import upload from '../middleware/multer.js';
import adminauth from '../middleware/adminauth.js';

const { addProduct, listProduct, removeProduct, singleProduct } = ProductController;

const productRouter = express.Router();

productRouter.post(
  '/add',adminauth,
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
  ]),
  addProduct
);
productRouter.post('/remove',adminauth, removeProduct);
productRouter.get('/list', listProduct);
productRouter.post('/single', singleProduct);

export default productRouter;
