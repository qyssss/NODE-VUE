const mongoose = require('mongoose')
// 加密
const bcrypt = require('bcrypt');

const schema = new mongoose.Schema({
    username: { type: String }, // 用户名
    password: {
        select: false, // 密码不显示
        type: String, set(pwd) {
            return bcrypt.hashSync(pwd, 10)
        }
    },   // 密码
})

module.exports = mongoose.model('Admin', schema)