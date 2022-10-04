/* eslint-disable */
let envVariables = {};

envVariables = require(`./.env.${process.env.ENVIRONMENT || "lcl"}.js`);

export const { ENVIRONMENT, API_URI } = envVariables;
