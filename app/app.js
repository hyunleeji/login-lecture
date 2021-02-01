"use strict";

//모듈
const express = require("express"); //require 명령어로 express라는 모듈을 다운받아준다.
const app = express();//app라는 변수에 express를 실행을 시킨다.

const PORT = 3000;

//라우팅
const home = require("./src/routes/home") //현재폴더(./)에서 /routes/home에서 index.js 파일을 읽게된다. home으로 받아서 루트 경로로오면 home으로 이동하게 되는것.

//앱 세팅
app.set("views", "./src/views");//화면 뷰를 관리해줄 파일이 저장될 폴더이름을 2번째 파라미터로 연결
app.set("view engine", "ejs");//view engine을 ejs라는 걸 사용할것 많이 사용하는 뷰 html이랑 비슷하다

app.use("/", home); //루트(/)라는 경로로 들어오면 home으로 보내준다. //use는 미들웨어를 등록해주는 메소드

module.exports = app;


// app.get("/", (req, res) => { //루트(/) 경로로 만들어줌 파라미터로 콜백함수를 넘겨줄것이다. //기능을 명시 // 터미널에서 ctrl+c로 서버를 껐다 켜주기
//     res.render("home/index")// index.ejs, login.ejs 를 이 도메인에 왔을때 이동을 해야하는데 이동할수 있는 코드를 짜주는 것.
// });

// app.get("/login", (req, res) => { //http://localhost:3000/login 으로 들어가면 나오는 화면 /는 꼭 넣어줘야한다. //`(백틱)으로 문자열처리를 해준다. 줄바꿈이 되더라도 자동으로 인식해준다.
//     res.render("home/login")
// });

// app.listen(PORT, () => {//원래 : app.listen(3000, () => { -> PORT라는 변수로 저장 // listen이라는 명령어로 서버를 띄울수 있다. 3000번 port로 열어달라. 2번째 
//     console.log("서버 가동");
// });

//http로 루트받아오기
// const http = require("http");
// const app = http.createServer((req, res) => { //브라우저로 한글로 해석해야한다.
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8" }) // writeHead를 써서 정상응답코드(200)를 보내주고, 내가 보내는게 text중 html이고charset은 utf-8이다 라고 해석을 해달라 하고 응답을 해주는 것
//     if (req.url === "/") { // express가 아닌 http로 사용하니까 한글 깨짐현상이 있고, 그것을 해결해줘야한다. 손이 많이 간다^..
//         res.end("여기는 루트 입니다.");
//     } else if (req.url === "/login") {
//         res.end("여기는 로그인 화면입니다.");
//     }
//     // console.log(req.url); // req.url로 들어오면 루트경로이후의 url들을 파씽해올수 있다
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.");
// });
