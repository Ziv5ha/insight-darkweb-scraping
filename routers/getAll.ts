import { Router } from 'express';
import { retrieveData } from '../controllers/getAllPastes';
const router = Router();

router.get('/', retrieveData);

export default router;
