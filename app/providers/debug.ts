import debug from "debug";
import { Request, Response, NextFunction } from 'express';

const logger = debug("app:log");

export default function enableLogging() {
    return (req: Request, res: Response, next: NextFunction) => {
        if (process.env.APP_DEBUG === "true") {
            logger("Time: %o", Date.now());
        }
        next();
    };
}
