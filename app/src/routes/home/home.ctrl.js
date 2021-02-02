"use strict"

const output = {
    home: (req, res) => { // const hello = function hello
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
};

//로그인 화면에서 id,pw값을 서버에서 인증하는 과정이 필요 해당데이터를 서버가 가지고 있어야한다.
const users = {
    id: ["worimIT", "나개발", "김팀장"],
    psword: ["1234", "1324", "123456"],
};

//해당 데이터랑 프론트에서 전달한 데이터랑 인증하는 과정
const process = {
    login: (req, res) => {
        const id = req.body.id,
        psword = req.body.psword;

        //아이디와 패스워드 검증
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {// users psword idx가 프론트에서 전달한 psword가 같은지 여부를 판단하는 것.
                return res.json({ // 로그인이 성공을 하게 되면 success: true라는 오브젝트를 json으로 만들어서 프론트엔드로 응답을 해주게 만드는 것.
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
};

//hello, login index.js에서 사용할수 있도록 모듈을 바깥으로 빼준다.
module.exports = {
    output,
    process
};