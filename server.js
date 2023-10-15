const dotenv = require("dotenv");
const app = require('./app');
const mysql = require('mysql');

const ConfigDB = {
    host: process.env.DATABASE_MYSQL,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD || 3306,
    port: process.env.DATABASE_PORT
}

const dbConnect = mysql.createConnection(ConfigDB);


process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
  });

dotenv.config({
    path: "./config.env",
});



const port = 4005;
const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
