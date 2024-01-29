import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;

    const category = await Category.create({ name, icon });

    return res.json(category);
  } catch  {
    return res.status(400).json({ error: 'Algo deu errado' });
  }
}
