/* eslint-disable no-undef */
let envVariables = {};

if (global.window?.env?.API_URI === "#API_URI#:#API_PORT#") {
  /* eslint-disable */
  envVariables = require(`./.env.${process.env.ENVIRONMENT || "lcl"}`);
} else {
  envVariables = {      
      ENVIRONMENT: global.window?.env?.ENVIRONMENT,
    API_URI: global.window?.env?.API_URI,
  };
}

export const { ENVIRONMENT, API_URI} = envVariables;
