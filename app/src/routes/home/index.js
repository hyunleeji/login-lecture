"use strict";// 이커머스 스크립트 문법을 준수하겠다는 명명

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl"); //컨트롤러 파일을 불러와서

router.get("/", ctrl.home); //home 객체에 접근
router.get("/login", ctrl.login);


module.exports = router; //외부로 내보내기 해주는 명령 app.js가 routet index.js가 어디있는지 모르기때문에 연결해주기위해