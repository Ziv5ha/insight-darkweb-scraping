import { NextFunction, Request, Response } from 'express';
import { analysis } from '../helpers/analysis';
import { traffic } from '../helpers/traffic';
import { clients } from '../middlewares/clients';
import PasteModel from '../mongo/model';
import { scraper } from '../scraper';

const strongholdUrl =
  'http://strongerw2ise74v3duebgsvug4mehyhlpa7f6kfwnas7zofs3kov7yd.onion/all';

export const retrieveData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pastes = await PasteModel.find({});
    const analytics = await analysis();
    const trafficObj = await traffic();
    const data = { pastes, analytics, traffic: trafficObj };
    clients.forEach((client) =>
      client.write(`data: ${JSON.stringify(data)}\n\n`)
    );
    // call on scrape and send the new message to all active clients
    setTimeout(async () => {
      await scraper(strongholdUrl, '#list > .row');
      console.log('scrapped');
      retrieveData(req, res, next);
    }, 120000); //every 2 minutes
  } catch (error) {
    // TODO error handler
    res.status(400).send('oh no');
  }
};
