import { Router } from 'express';
import { UserController } from '../app/controllers/userController';
import { httpMiddleware } from '../app/middlewares/httpMiddleware';

const router = Router();

router.use(httpMiddleware);

router.get('/', UserController.getUsers);
router.get('/countries', UserController.getCountries);

export default router;
