"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");
    
loginBtn.addEventListener("click", login); //loginBtn 클릭되면 로그인 되게

function login() { // id,pw에 들어있는 값을 가져와 줘야한다
    const req = {
        id : id.value,
        psword : psword.value,
    };
    // console.log(id.value); // id.value로 접근하면 입력한 해당값을 가져온다
}