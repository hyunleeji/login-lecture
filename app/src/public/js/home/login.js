"use strict";
// html과 연결되어 있는 js파일 프론트화면에 보여질 화면이다

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");
    
loginBtn.addEventListener("click", login); //loginBtn 클릭되면 로그인 되게

function login() { // id,pw에 들어있는 값을 가져와 줘야한다
    const req = {
        id : id.value,
        psword : psword.value,
    };

    console.log(req); // 오브젝트 형태는 키와 값의 형태로 잘 주어져 있지만
    console.log(JSON.stringify(req)); // json은 일반 문자열의 형태로 출력이 된다.
    fetch("/login", { //body를 통해서 데이터를 전달해야하는데 http method 중에서 POST라는 메소드로 데이터를 전달해야한다.
        method: "POST",
        headers: {
            "Content-Type": "application/json" //application한 형태로 json에 전달을 한다.
        },
        body: JSON.stringify(req), //stringify(req를 문자열로 바꿔줌)를 사용해서 오브젝트 req 데이터를 json으로 감싸주게 되는것 // body라는 key값으로 req전달해 줄수 있다.
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success) {
                location.href = "/";
            } else {
                alert(res.msg);
            }
        }) // 에러발생시 
        .catch((err) => {
            console.error("로그인 중 에러 발생");
        });
    // console.log(id.value); // id.value로 접근하면 입력한 해당값을 가져온다
}

// fetch로 데이터가 서버로 전달이 되고, 이러한 데이터를 서버에서 받으려면 login이라는 경로
// POST라는 메소드로 데이터를 받을수 있는 API가 마련이 되어있어야 한다.