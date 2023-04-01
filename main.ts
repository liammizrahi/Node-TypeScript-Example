import 'dotenv/config';
import express from 'express';
import middleware from "./app/providers/serviceProvider";
import routes from './config/routes';
import handlebarsConfig from './config/handlebars';
import enableLogging from "./app/providers/debug";

// definitions
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(middleware);
// handlebars view engine
app.engine(handlebarsConfig.viewEngine, handlebarsConfig.engine);
app.set('views', handlebarsConfig.viewDir);
app.set('view engine', handlebarsConfig.viewEngine);

// load all routes
app.use(routes);

// set server to listen to the defined port
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
