import express from "express";
import enableLogging from "./debug";

const middleware = express();

// logger
middleware.use(enableLogging());
// body parsing from JSON and form data
middleware.use(express.json());
middleware.use(express.urlencoded({ extended: true }));
// public assets folder
middleware.use(express.static("public"));

export default middleware;
