
const USER = "nikolasemjaniv";
const PASS = "sema1204.";
const HOST = "localhost";
const PG_PORT = 5432;

// const USER = process.env.USER;
// const PASS = process.env.PASS;
// const HOST = process.env.HOST;
// const PG_PORT = process.env.PG_PORT;

const config = {
    user: USER,
    host: HOST,
    password: PASS,
    port: PG_PORT
};

module.exports = {
    config
};