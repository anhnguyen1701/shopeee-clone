const mysql = require("mysql");

const connectDB = async () => {
    try {
        const conn = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        });
        console.log("DB connection successfully");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = { connectDB };