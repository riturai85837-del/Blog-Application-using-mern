var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// ================= VIEW ENGINE =================
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// ================= MIDDLEWARES =================
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ================= ROUTES =================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ================= 404 =================
app.use(function(req, res, next) {
  res.status(404).json({
    success: false,
    msg: "Route not found"
  });
});



module.exports = app;
