import { Router } from 'express';
import PasteModel from '../mongo/model';
const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const data = await PasteModel.find({});
    res.send(data);
  } catch (error) {
    // TODO error handler
    res.status(400).send('oh no');
  }
});

export default router;
