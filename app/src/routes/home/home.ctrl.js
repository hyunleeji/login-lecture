"use strict"

const home = (req, res) => { // const hello = function hello
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};

//hello, login index.js에서 사용할수 있도록 모듈을 바깥으로 빼준다.
module.exports = {
    home,
    login,
};