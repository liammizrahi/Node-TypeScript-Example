import 'dotenv/config';
import express from 'express';
import routes from './config/routes';
import handlebarsConfig from './config/handlebars';
import debug from "debug";

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
// set up handlebars view engine and view directory
app.engine(handlebarsConfig.viewEngine, handlebarsConfig.engine);
app.set('views', handlebarsConfig.viewDir);
app.set('view engine', handlebarsConfig.viewEngine);

// load all routes
app.use(routes);

// set server to listen to the defined port
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
