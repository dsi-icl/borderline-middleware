const chalk = require('chalk');
const config = require('../config/borderline.config.js');
const BorderlineMiddleware = require('./borderlineMiddleware.js');

let middleware = new BorderlineMiddleware(config);
middleware.start().then((bank) => {
    const _server = bank.server;
    console.log(`Borderline Middleware listening at ${_server.address().address}:${_server.address().port}`); // eslint-disable-line no-console
}, (error) => {
    const crawl = (obj) => obj ? `${obj.error}${obj.stack ? `, ${crawl(obj.stack)}` : ''}` : '';
    console.error(chalk.red('error'), crawl(error)); // eslint-disable-line no-console
    process.exit(1);
});
