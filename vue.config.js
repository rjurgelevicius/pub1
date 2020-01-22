const fs = require("fs");

module.exports = {
  devServer: {
    https: {
      key: fs.readFileSync("../ssl-certs/private/selfsigned.key"),
      cert: fs.readFileSync("../ssl-certs/private/selfsigned.crt")
    },
    public: "https://localhost:8080/"
  }
};
