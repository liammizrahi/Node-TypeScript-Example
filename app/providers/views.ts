import express from "express";
import handlebarsConfig from "../../config/handlebars";

const views = express();

views.engine(handlebarsConfig.viewEngine, handlebarsConfig.engine);
views.set("views", handlebarsConfig.viewDir);
views.set("view engine", handlebarsConfig.viewEngine);

export default views;
