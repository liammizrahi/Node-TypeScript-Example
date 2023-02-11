import { Request, Response } from 'express';

export class RootController {
    static async showIndex(req: Request, res: Response) {
        res.render("index", {message: "Hello World"});
    }
}
