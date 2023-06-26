const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String }, // 课程名称
    price: { type: String } // 课程价格
})

module.exports = mongoose.model('Course', schema)