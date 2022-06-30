"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }
    login() {
        const client = this.body;
        const { id, psword } = UserStorage.getUserInfo(client.id);
        if (id) {
            if (id === client.id && psword === client.psword) {
                return { success: true };
            }
            return { sucess: false, msg: "비밀번호가 틀렸습니다" };
        };
        return { sucess: false, msg: "아이디가 존재하지 않습니다." };
    }

    register(){
        const client = this.body;
        UserStorage.save(client);
    }
}

module.exports = User;

