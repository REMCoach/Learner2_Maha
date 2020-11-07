const chalk = require("chalk");
const { PORT, HOST } = require("./config");
const app = require("./app");

const http = require("http");
const server = http.Server(app);
console.log(server);
console.log(PORT);
console.log(HOST);
server.listen(PORT, HOST, () =>
  console.log(chalk.blue(`Server started @ http://${HOST}:${PORT}/`))
);
