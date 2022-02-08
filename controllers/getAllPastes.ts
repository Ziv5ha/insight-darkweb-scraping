import { NextFunction, Request, Response } from 'express';
import { analysis } from '../helpers/analysis';
import { clients } from '../middlewares/clients';
import PasteModel from '../mongo/model';

export const retrieveData = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pastes = await PasteModel.find({});
    const analytics = await analysis();
    const data = { pastes, analytics };
    clients.forEach((client) =>
      client.write(`data: ${JSON.stringify(data)}\n\n`)
    );
  } catch (error) {
    // TODO error handler
    res.status(400).send('oh no');
  }
};
