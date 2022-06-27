"use stict"

class UserStorage{
    static #users = {
        id: ["jinys90", "jinyh95", "ys.jin@fastfive.co.kr"],
        psword: ["1234", "5678", "123456"],
        name: ["진용성","용희","지영"],
    };
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;
