const chalk = require("chalk");
const config = require("./config");
console.log(config)
const app = require("./app");

const http = require("http");
const server = http.Server(app);
server.listen(config.PORT, config.HOST, () =>
  console.log(chalk.blue(`Server started @ http://${config.HOST}:${config.PORT}/`))
);
