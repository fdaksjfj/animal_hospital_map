let express = require("express");
let axios = require("axios");
const path = require('path');


let app = express();
let port = 80;

app.use(express.static("public_html"));

app.listen(port, function () {
  console.log("HTML 서버 시작");
});

const mysql = require("mysql");
const conn = {
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '12345',
  database: 'animalhospital'
}

let connection = mysql.createConnection(conn); // DB 커넥션 생성
connection.connect();   // DB 접속



app.get('/map', (req,res) => res.sendFile(path.join(__dirname, './public_html/index.html')));


app.get('/users', (req, res) => {
  connection.query('SELECT * from animalhospitalinformation', (error, rows) => {
    if (error) throw error;
    res.send(rows);
  });
});



//connection.end(); // DB 접속 종료

