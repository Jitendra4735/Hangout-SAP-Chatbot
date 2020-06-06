require('dotenv').config();
var sql = require("mssql");
const config = {
    user: process.env.User,
    password: process.env.Password,
    server: process.env.Server,
    database: process.env.Database,
    encrypt: true,
    requestTimeout: 105000
};
sql.connect(config, function (err) {
    if (err) {
        console.log("Database Conection failed, error occured=> ", err);
    } else {
        console.log("Database connected");
    }
});