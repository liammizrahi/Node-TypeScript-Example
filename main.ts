import 'dotenv/config';
import express from 'express';
import routes from './routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(routes);

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
