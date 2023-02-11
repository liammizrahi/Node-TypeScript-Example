import 'dotenv/config';
import express from 'express';
import routes from './routes';
import debug from "debug";

const app = express();
const port = process.env.PORT || 3000;
const logger = debug("app:log");

app.use((req, res, next) => {
    if (process.env.APP_DEBUG === "true") {
        logger("Time: %o", Date.now());
    }
    next();
});

app.set("view engine", "ejs");
app.set("views", "views");

app.use(routes);

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
