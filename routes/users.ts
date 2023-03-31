import { Router } from 'express';
import { UserController } from '../app/controllers/userController';
import { httpMiddleware } from '../app/middlewares/httpMiddleware';

const router = Router();
const userController = new UserController();

router.use(httpMiddleware);

router.get('/', userController.getUsers);
router.get('/countries', userController.getCountries);

export default router;
