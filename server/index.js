const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Password@1234",
  database: "parking_records",
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert", (req, res) => {
  const carNumber = req.body.carNumber;
  const timeOfPark = req.body.timeOfPark;

  if (carNumber === "") return;

  const sqlInsert =
    "INSERT INTO car_numbers (carNumber, timeOfPark) Values (?,?)";
  db.query(sqlInsert, [carNumber, timeOfPark], (err, result) => {
    console.log(err);
  });
});

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM car_numbers";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.delete("/api/delete/:carNumber", (req, res) => {
  const num = req.params.carNumber;
  const sqlDelete = "DELETE FROM car_numbers WHERE carNumber = ?";
  db.query(sqlDelete, num, (err, result) => {
    if (err) console.log(err);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001 ");
});
