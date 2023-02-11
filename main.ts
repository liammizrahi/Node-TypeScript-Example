import 'dotenv/config';
import express from 'express';
import routes from './routes';
import debug from "debug";
import { engine } from 'express-handlebars';

// definitions
const app = express();
const port = process.env.PORT || 3000;
const logger = debug("app:log");

// enable logging
app.use((req, res, next) => {
    if (process.env.APP_DEBUG === "true") {
        logger("Time: %o", Date.now());
    }
    next();
});

// handlebars view engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// load all routes
app.use(routes);

// set server to listen to the defined port
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
