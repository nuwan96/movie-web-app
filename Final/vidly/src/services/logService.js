// import * as Sentry from "@sentry/browser";

// in this project we didn't use the "sentry ISP" so we have to comment out this lines
function init() {
  /*
  Sentry.init({
    dsn:
      "https://e41c6c33b25e41ceb049859cc5d94162@o380490.ingest.sentry.io/5206628",
  });
  */
}

//  this function  takes the errors
function log(error) {
  //Sentry.captureException(error);

  console.error(error);
}

//// export defult "object" with two "methods" -----------

// this is a interface of the logging service
export default {
  init, // these are methods
  log,
};
