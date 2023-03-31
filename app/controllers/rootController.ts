import { Request, Response } from 'express';
import handlebars from 'handlebars';
import fs from 'fs';

export class RootController {

    public async showIndex(req: Request, res: Response) {
        const view = handlebars.compile(fs.readFileSync('views/index.handlebars', 'utf8'));
        res.render('layouts/main', { title: 'My App', view });
    }
}
