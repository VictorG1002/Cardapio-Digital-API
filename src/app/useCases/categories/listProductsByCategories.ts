import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listProductsByCategories(req: Request, res: Response) {
  try {
    const products = await Product.find();

    return res.json(products);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Algo deu errado' });
  }
}