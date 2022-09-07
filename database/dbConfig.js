
require('dotenv').config();

const config = process.env.DATABASE_URL ? {
    connectionString: process.env.DATABASE_URL, ssl: {
        rejectUnauthorized: false
    }
} : {
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASS,
    port: process.env.PG_PORT,
};

console.log("CONFIG >> ", config);

module.exports = {
    config
};