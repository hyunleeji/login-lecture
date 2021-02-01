//서버를 띄어주는 코드 복붙
"use strict";

const app = require("../app");
const PORT = 3000;

app.listen(PORT, () => {//원래 : app.listen(3000, () => { -> PORT라는 변수로 저장 // listen이라는 명령어로 서버를 띄울수 있다. 3000번 port로 열어달라. 2번째 
    console.log("서버 가동");
});