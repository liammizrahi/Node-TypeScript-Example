import { engine } from 'express-handlebars';

const handlebars = {
    engine: engine(),
    viewDir: './views',
    viewEngine: 'handlebars',
};

export default handlebars;
