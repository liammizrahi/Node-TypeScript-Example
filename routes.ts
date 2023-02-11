import { Router } from 'express';
import usersRouter from './routes/users';
import rootRouter from './routes/root';

const router = Router();

router.use('/users', usersRouter);
router.use('', rootRouter);

router.use((req, res, next) => {
    res.status(404).send("Sorry, that route doesn't exist.");
});

export default router;
