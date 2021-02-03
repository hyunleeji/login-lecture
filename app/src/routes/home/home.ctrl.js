"use strict"

const User = require("../../models/User");

const output = { // 단순히 화면을 출력하는 것.
    home: (req, res) => { // const hello = function hello
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    }
};


//해당 데이터랑 프론트에서 전달한 데이터랑 인증하는 과정
const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
    register: (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
},
};

//hello, login index.js에서 사용할수 있도록 모듈을 바깥으로 빼준다.
module.exports = {
    output,
    process
};

        // const id = req.body.id,
        // psword = req.body.psword;

        // const users = UserStorage.getUsers("id", "psword"); //console.log로 다이렉트로 가져온 UserStorage class 이용하기

        // const response = {};
        // //아이디와 패스워드 검증
        // if (users.id.includes(id)) {
        //     const idx = users.id.indexOf(id);
        //     if (users.psword[idx] === psword) {// users psword idx가 프론트에서 전달한 psword가 같은지 여부를 판단하는 것.
        //         response.success = true;
        //         return res.json(response); // 로그인이 성공을 하게 되면 success: true라는 오브젝트를 json으로 만들어서 프론트엔드로 응답을 해주게 만드는 것.
        //     }
        // }

        // response.success = false;
        // response.msg = "로그인에 실패하셨습니다.";
        // return res.json(response);
    //     },
    // };

// 원래
// return res.json({
//     success: false,
//     msg: "로그인에 실패하셨습니다.",
// });
