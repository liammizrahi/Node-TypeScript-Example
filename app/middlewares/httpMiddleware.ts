import { Request, Response, NextFunction } from 'express';

export const httpMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Perform some action before processing the request
    // ...

    // Call next to move to the next middleware or route handler
    next();
};
