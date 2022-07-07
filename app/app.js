"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const logger = require("./src/config/logger")

const app = express();
dotenv.config();

//라우팅
const home = require("./src/routes/home");
const accessLogStream = require("./src/config/log");


//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParser.json());
app.use(morgan("common", { stream: logger.stream }))

//URL을 통해 전달되는 데이터에 한글, 공백 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(morgan("tiny", {stream: accessLogStream}));
app.use("/", home); // 미들웨어 등록 메써드

module.exports = app;

