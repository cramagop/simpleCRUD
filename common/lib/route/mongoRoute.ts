import { Router } from 'express'
import controler from '../controlers/mongoControler';

const router = Router();

router.get('/', controler.getAll);
router.get('/:id', controler.getOne);
router.put('/:id', controler.modifyOne);
router.post('/', controler.createOne);
router.delete('/:id', controler.deleteOne);

export default router;