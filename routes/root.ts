import { Router } from 'express';
import { RootController } from '../controllers/rootController';

const router = Router();

router.get('/', RootController.showIndex);

router.get('/message', (req, res) => {
    res.json({message: "Hello World"});
});

export default router;
