import { Router } from 'express';
import { RootController } from '../app/controllers/rootController';

const router = Router();
const rootController = new RootController();

router.get('/', rootController.showIndex);

router.get('/message', (req, res) => {
    res.json({message: "Hello World"});
});

export default router;
