import path from 'node:path';

import { Router } from 'express';

import multer from 'multer';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { listProductsByCategories } from './app/useCases/categories/listProductsByCategories';
import { listOrders } from './app/useCases/orders/listOrders';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

//  List products
router.get('/products', listProducts);

// Create product
router.post('/products', upload.single('image'), createProduct);

// Get products by category
router.get('/categories/:categoryId/products', listProductsByCategories);

// List orders
router.get('/orders', listOrders);

// Create order
router.post('/orders', (req, res) => {
  res.send('Hello World!');
});

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('Hello World!');
});

// Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('Hello World!');
});
