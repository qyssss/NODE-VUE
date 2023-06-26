const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String }, // 教师姓名
    pic: { type: String } // 头像
})

module.exports = mongoose.model('Teacher', schema)