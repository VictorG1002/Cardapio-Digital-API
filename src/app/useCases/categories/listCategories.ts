import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function listCategories(req: Request, res: Response) {
  try {
    const categories = await Category.find();

    return res.json(categories);
  } catch (error) {
    console.log(error);

    res.status(400).json({ error: 'Algo deu errado' });
  }
}
