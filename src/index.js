const chalk = require("chalk");
const config = require("./config");
const app = require("./app");

const http = require("http");
const server = http.Server(app);
server.listen(config.PORT, config.HOST, () =>
  console.log(chalk.blue(`Server started @ http://exp.rem.coach:${config.PORT}/`))
);
