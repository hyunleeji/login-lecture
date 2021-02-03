"use strict";

class UserStorage { // class 안에 선언할때는 const같은 선언자가 필요없다
    //로그인 화면에서 id,pw값을 서버에서 인증하는 과정이 필요 해당데이터를 서버가 가지고 있어야한다.
    static #users = { // class 자체에서 users에 접근하고자 할때는 static 을 선언하여 정적 변수로 만들어줘야한다.
        id: ["worimIT", "나개발", "김팀장"],
        psword: ["1234", "1324", "123456"],
        name: ["우리밋", "나개발", "김팀장"],
    };

    static getUsers(...fields) { // class안에 method를 접근하려면 앞에 static을 넣어주어야한다
        const users = this.#users; // 은닉화 된 private 변수인 #users 반환
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser; 
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success: true };
    }
}

module.exports = UserStorage;

//로그인이나 회원가입 기능을 한다. 
// console.log(UserStorage.users); 이런식으로 내부데이터에 접근하는게 불가해야 하는게 맞다. 그래서
// 다이렉트로 접근할수 없게 하기 위해 static users을 은닉화 #users = public한 변수에서 private 변수로 만들어 준다