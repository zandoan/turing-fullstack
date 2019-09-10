const express = require("express");
const os = require("os");
const dotenv = require("dotenv");

dotenv.config();

const mysql = require("mysql");

// Connect to DEV SQL DBMS
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASS,
  database: "tshirtshop"
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", (err, rows) => {
  if (err) throw err;
  // eslint-disable-next-line no-console
  console.log("Test Query for DB => The solution is: ", rows[0].solution);
});

const app = express();

app.use(express.static("dist"));

// Example API
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);

// Get All products
app.get("/api/products", (req, res) => {
  connection.query("SELECT * from product;", (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

// Get Categories
app.get("/api/categories", (req, res) => {
  connection.query("SELECT * from category;", (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

// Get Departments
app.get("/api/departments", (req, res) => {
  connection.query("SELECT * from department;", (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

app.listen(process.env.PORT || 8080, () =>
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
