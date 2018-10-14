var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "railway",
  insecureAuth: true
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected...'); 
  var createUser = "create table user(userID int primary key, username varchar(255), password varchar(255), age int)";
  var createTrain = "create table train(trainID int primary key, trainname varchar(255), toPlace varchar(255), fromPlace varchar(255), arrivalTime time, departureTime time, classA int, classB int, classC int, amenities varchar(255))"; 
  var createBooking = "create table booking(userID int references user(userID), trainID int references train(trainID), departureDate date, arrivalDate date, bookingTime datetime, classID int, seatNumber int, count int)"; 
  var createCost = "create table cost(classA int, classB int, classC int)";


  connection.query(createUser, function(err, result) {
    if (err) throw err; 
    console.log('User table created');
  });

  connection.query(createTrain, function(err, result) {
    if (err) throw err; 
    console.log('Train table created');
  });

  connection.query(createCost, function(err, result) {
    if (err) throw err; 
    console.log('Cost table created');
  });

  connection.query(createBooking, function(err, result) {
    if (err) throw err; 
    console.log('Booking table created');
  });

});

