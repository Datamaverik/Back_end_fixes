const config = require("config");

//  in the config file and add a key - value pair "jwtPrivateKey" : "something"
module.exports = function () {
  if (!config.get("jwtPrivateKey")) {
    throw new Error("FATAL ERROR: jwtPrivateKey is not defined");
  }
};
