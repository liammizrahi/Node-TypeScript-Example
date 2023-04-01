import handlebars from 'handlebars';
import fs from 'fs';

export function showView(viewName: string, data?: any): any  {
    return handlebars.compile(fs.readFileSync(`views/${viewName}.handlebars`, 'utf8'));
    //const html = template(data);
}
