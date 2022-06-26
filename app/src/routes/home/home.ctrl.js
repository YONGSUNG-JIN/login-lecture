"use strict";

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    }
}

const users = {
    id: ["jinys90", "jinyh95", "ys.jin@fastfive.co.kr"],
    psword: ["1234", "5678", "123456"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;

        console.log(id, psword);

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패"
        });
    }
}


module.exports = {
    output: output,
    process,
};