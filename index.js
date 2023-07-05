require("dotenv").config();

const mysql = require("mysql2");

// Create DB Connection
const connection = mysql.createConnection({
  host: process.env.SQL_DB_HOST,
  user: process.env.SQL_DB_USER,
  password: process.env.SQL_DB_PASSWORD,
  database: process.env.SQL_DB_DATABASE,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL server: " + err.stack);
    return;
  }

  console.log("Connected to MySQL server.");
});

//
//
//
//
// Quering DB data
// const query =
//   "INSERT INTO vibration(device_pid, vibration_value) VALUES(1, -0.32)";

// connection.query(query, (err, results) => {
//   if (err) {
//     console.error("Error executing MySQL query: " + err.stack);
//     return;
//   }

//   console.log("Query results:", results);
// });

//
//
//
//
// Close DB Connection
// connection.end((err) => {
//   if (err) {
//     console.error("Error closing MySQL connection: " + err.stack);
//     return;
//   }

//   console.log("MySQL connection closed.");
// });
